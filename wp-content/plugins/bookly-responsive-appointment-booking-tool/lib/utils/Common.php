<?php
namespace Bookly\Lib\Utils;

use Bookly\Lib;

/**
 * Class Common
 * @package Bookly\Lib\Utils
 */
abstract class Common
{
    /** @var string CSRF token */
    private static $csrf;

    /**
     * Get e-mails of WP & Bookly admins
     *
     * @return array
     */
    public static function getAdminEmails()
    {
        global $wpdb;

        // Add to filter capability manage_options or manage_bookly
        $meta_query = array(
            'relation' => 'OR',
            array( 'key' => $wpdb->prefix . 'capabilities', 'compare' => 'LIKE', 'value' => '"manage_options"', ),
            array( 'key' => $wpdb->prefix . 'capabilities', 'compare' => 'LIKE', 'value' => '"manage_bookly"', ),
        );
        $roles = new \WP_Roles();
        // Find roles with capabilities manage_options or manage_bookly
        foreach ( $roles->role_objects as $role ) {
            if ( $role->has_cap( 'manage_options' ) || $role->has_cap( 'manage_bookly' ) ) {
                $meta_query[] = array( 'key' => $wpdb->prefix . 'capabilities', 'compare' => 'LIKE', 'value' => '"' . $role->name . '"', );
            }
        }

        return array_map(
            function ( $a ) { return $a->data->user_email; },
            get_users( compact( 'meta_query' ) )
        );
    }

    /**
     * Generates email's headers FROM: Sender Name < Sender E-mail >
     *
     * @param array $extra
     * @return array
     */
    public static function getEmailHeaders( $extra = array() )
    {
        $headers = array();
        if ( Lib\Config::sendEmailAsHtml() ) {
            $headers[] = 'Content-Type: text/html; charset=utf-8';
        } else {
            $headers[] = 'Content-Type: text/plain; charset=utf-8';
        }
        $headers[] = 'From: ' . get_option( 'bookly_email_sender_name' ) . ' <' . get_option( 'bookly_email_sender' ) . '>';
        if ( isset ( $extra['reply-to'] ) ) {
            $headers[] = 'Reply-To: ' . $extra['reply-to']['name'] . ' <' . $extra['reply-to']['email'] . '>';
        }

        return apply_filters( 'bookly_email_headers', $headers );
    }

    /**
     * @return string
     */
    public static function getCurrentPageURL()
    {
        if ( ( ! empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] !== 'off' ) || $_SERVER['SERVER_PORT'] == 443 ) {
            $url = 'https://';
        } else {
            $url = 'http://';
        }
        $url .= isset( $_SERVER['HTTP_X_FORWARDED_HOST'] ) ? $_SERVER['HTTP_X_FORWARDED_HOST'] : $_SERVER['HTTP_HOST'];

        return $url . $_SERVER['REQUEST_URI'];
    }

    /**
     * @param bool $allow
     */
    public static function cancelAppointmentRedirect( $allow )
    {
        if ( $url = $allow ? get_option( 'bookly_url_cancel_page_url' ) : get_option( 'bookly_url_cancel_denied_page_url' ) ) {
            wp_redirect( $url );
            self::redirect( $url );
            exit;
        }

        $url = home_url();
        if ( isset ( $_SERVER['HTTP_REFERER'] ) ) {
            if ( parse_url( $_SERVER['HTTP_REFERER'], PHP_URL_HOST ) == parse_url( $url, PHP_URL_HOST ) ) {
                // Redirect back if user came from our site.
                $url = $_SERVER['HTTP_REFERER'];
            }
        }
        wp_redirect( $url );
        self::redirect( $url );
        exit;
    }

    /**
     * Render redirection page
     *
     * @param string $url
     */
    public static function redirect( $url )
    {
        printf( '<!doctype html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="refresh" content="1;url=%s">
                    <script type="text/javascript">
                        window.location.href = %s;
                    </script>
                    <title>%s</title>
                </head>
                <body>
                %s
                </body>
                </html>',
            esc_attr( $url ),
            json_encode( $url ),
            __( 'Page Redirection', 'bookly' ),
            sprintf( __( 'If you are not redirected automatically, follow the <a href="%s">link</a>.', 'bookly' ), esc_attr( $url ) )
        );
    }

    /**
     * Escape params for admin.php?page
     *
     * @param $page_slug
     * @param array $params
     * @return string
     */
    public static function escAdminUrl( $page_slug, $params = array() )
    {
        $path = 'admin.php?page=' . $page_slug;
        if ( ( $query = build_query( $params ) ) != '' ) {
            $path .= '&' . $query;
        }

        return esc_url( admin_url( $path ) );
    }

    /**
     * Check whether any of the current posts in the loop contains given short code.
     *
     * @param string $short_code
     * @return bool
     */
    public static function postsHaveShortCode( $short_code )
    {
        /** @global \WP_Query $wp_query */
        global $wp_query;

        if ( $wp_query && $wp_query->posts !== null ) {
            foreach ( $wp_query->posts as $post ) {
                if ( has_shortcode( $post->post_content, $short_code ) ) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Add utm_source, utm_medium, utm_campaign parameters to url
     *
     * @param $url
     * @param $campaign
     *
     * @return string
     */
    public static function prepareUrlReferrers( $url, $campaign )
    {
        return add_query_arg(
            array(
                'utm_source'   => 'bookly_admin',
                'utm_medium'   => Lib\Config::proActive() ? 'pro_active' : 'pro_not_active',
                'utm_campaign' => $campaign,
            ),
            $url
        );
    }

    /**
     * Get option translated with WPML.
     *
     * @param $option_name
     * @return string
     */
    public static function getTranslatedOption( $option_name )
    {
        return self::getTranslatedString( $option_name, get_option( $option_name ) );
    }

    /**
     * Get string translated with WPML.
     *
     * @param             $name
     * @param string      $original_value
     * @param null|string $language_code Return the translation in this language
     * @return string
     */
    public static function getTranslatedString( $name, $original_value = '', $language_code = null )
    {
        return apply_filters( 'wpml_translate_single_string', $original_value, 'bookly', $name, $language_code );
    }

    /**
     * Check whether the current user is administrator or not.
     *
     * @return bool
     */
    public static function isCurrentUserAdmin()
    {
        return current_user_can( 'manage_options' ) || current_user_can( 'manage_bookly' );
    }

    /**
     * Check whether the current user is supervisor or not.
     *
     * @return bool
     */
    public static function isCurrentUserSupervisor()
    {
        return self::isCurrentUserAdmin() || current_user_can( 'manage_bookly_appointments' );
    }

    /**
     * Check whether the current user is staff or not.
     *
     * @return bool
     */
    public static function isCurrentUserStaff()
    {
        return self::isCurrentUserAdmin()
            || Lib\Entities\Staff::query()->where( 'wp_user_id', get_current_user_id() )->count() > 0;
    }

    /**
     * Check whether the current user is customer or not.
     *
     * @return bool
     */
    public static function isCurrentUserCustomer()
    {
        return self::isCurrentUserSupervisor()
            || Lib\Entities\Customer::query()->where( 'wp_user_id', get_current_user_id() )->count() > 0
            || self::isCurrentUserStaff();
    }

    /**
     * Determine the current user time zone which may be the staff or WP time zone
     *
     * @return string
     */
    public static function getCurrentUserTimeZone()
    {
        if ( ! self::isCurrentUserSupervisor() ) {
            /** @var Lib\Entities\Staff $staff */
            $staff = Lib\Entities\Staff::query()->where( 'wp_user_id', get_current_user_id() )->findOne();
            if ( $staff ) {
                $staff_tz = $staff->getTimeZone();
                if ( $staff_tz ) {
                    return $staff_tz;
                }
            }
        }

        // Use WP time zone by default
        return Lib\Config::getWPTimeZone();
    }

    /**
     * Get required capability for view menu.
     *
     * @return string
     */
    public static function getRequiredCapability()
    {
        return current_user_can( 'manage_options' ) ? 'manage_options' : 'manage_bookly';
    }

    /**
     * @param int $duration
     * @return array
     */
    public static function getDurationSelectOptions( $duration )
    {
        $time_interval = get_option( 'bookly_gen_time_slot_length' );

        $options = array();

        for ( $j = $time_interval; $j <= 720; $j += $time_interval ) {

            if ( ( $duration / 60 > $j - $time_interval ) && ( $duration / 60 < $j ) ) {
                $options[] = array(
                    'value' => $duration,
                    'label' => DateTime::secondsToInterval( $duration ),
                    'selected' => 'selected',
                );
            }

            $options[] = array(
                'value' => $j * 60,
                'label' => DateTime::secondsToInterval( $j * 60 ),
                'selected' => selected( $duration, $j * 60, false ),
            );
        }

        for ( $j = 86400; $j <= 604800; $j += 86400 ) {
            $options[] = array(
                'value' => $j,
                'label' => DateTime::secondsToInterval( $j ),
                'selected' => selected( $duration, $j, false ),
            );
        }

        return $options;
    }

    /**
     * Get services grouped by categories for drop-down list.
     *
     * @param string $raw_where
     * @return array
     */
    public static function getServiceDataForDropDown( $raw_where = null )
    {
        $result = array();

        $query = Lib\Entities\Service::query( 's' )
            ->select( 'c.id AS category_id, c.name, s.id, s.title' )
            ->leftJoin( 'Category', 'c', 'c.id = s.category_id' )
            ->sortBy( 'COALESCE(c.position,99999), s.position' )
        ;
        if ( $raw_where !== null ) {
            $query->whereRaw( $raw_where, array() );
        }
        foreach ( $query->fetchArray() as $row ) {
            $category_id = (int) $row['category_id'];
            if ( ! isset ( $result[ $category_id ] ) ) {
                $result[ $category_id ] = array(
                    'name'  => $category_id ? $row['name'] : __( 'Uncategorized', 'bookly' ),
                    'items' => array(),
                );
            }
            $result[ $category_id ]['items'][] = array(
                'id'    => $row['id'],
                'title' => $row['title'],
            );
        }

        return $result;
    }

    /**
     * XOR encrypt/decrypt.
     *
     * @param string $str
     * @param string $password
     * @return string
     */
    private static function _xor( $str, $password = '' )
    {
        $len   = strlen( $str );
        $gamma = '';
        $n     = $len > 100 ? 8 : 2;
        while ( strlen( $gamma ) < $len ) {
            $gamma .= substr( pack( 'H*', sha1( $password . $gamma ) ), 0, $n );
        }

        return $str ^ $gamma;
    }

    /**
     * XOR encrypt with Base64 encode.
     *
     * @param string $str
     * @param string $password
     * @return string
     */
    public static function xorEncrypt( $str, $password = '' )
    {
        return base64_encode( self::_xor( $str, $password ) );
    }

    /**
     * XOR decrypt with Base64 decode.
     *
     * @param string $str
     * @param string $password
     * @return string
     */
    public static function xorDecrypt( $str, $password = '' )
    {
        return self::_xor( base64_decode( $str ), $password );
    }

    /**
     * Generate unique value for entity field.
     *
     * @param string $entity_class_name
     * @param string $token_field
     * @return string
     */
    public static function generateToken( $entity_class_name, $token_field )
    {
        /** @var Lib\Base\Entity $entity */
        $entity = new $entity_class_name();
        do {
            $token = md5( uniqid( time(), true ) );
        }
        while ( $entity->loadBy( array( $token_field => $token ) ) === true );

        return $token;
    }


    /**
     * Get CSRF token.
     *
     * @return string
     */
    public static function getCsrfToken()
    {
        if ( self::$csrf === null ) {
            self::$csrf = wp_create_nonce( 'bookly' );
        }

        return self::$csrf;
    }

    /**
     * Set nocache constants.
     *
     * @param bool $forcibly
     */
    public static function noCache( $forcibly = false )
    {
        if ( $forcibly || get_option( 'bookly_gen_prevent_caching' ) ) {
            if ( ! defined( 'DONOTCACHEPAGE' ) ) {
                define( 'DONOTCACHEPAGE', true );
            }
            if ( ! defined( 'DONOTCACHEOBJECT' ) ) {
                define( 'DONOTCACHEOBJECT', true );
            }
            if ( ! defined( 'DONOTCACHEDB' ) ) {
                define( 'DONOTCACHEDB', true );
            }
        }
    }

    /**
     * Disable WP Emoji
     */
    public static function disableEmoji()
    {
        remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
        remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
        remove_action( 'embed_head', 'print_emoji_detection_script' );
        remove_action( 'wp_print_styles', 'print_emoji_styles' );
        remove_action( 'admin_print_styles', 'print_emoji_styles' );
    }

    /**
     * @return \WP_Filesystem_Direct
     */
    public static function getFilesystem()
    {
        // Emulate WP_Filesystem to avoid FS_METHOD and filters overriding "direct" type
        if ( ! class_exists( 'WP_Filesystem_Direct', false ) ) {
            require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
            require_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';
        }

        return new \WP_Filesystem_Direct( null );
    }

    /**
     * Get sorted payment systems
     *
     * @return array
     */
    public static function getGateways()
    {
        $gateways = array();
        if ( Lib\Config::payLocallyEnabled()) {
            $gateways['local'] = array(
                'title' => __( 'Local', 'bookly' ),
            );
        }

        if ( Lib\Cloud\API::getInstance()->account->productActive( 'stripe' ) ) {
            $gateways['cloud_stripe'] = array(
                'title' => 'Stripe Cloud',
            );
        }
        $gateways = array_map( function ( $gateway ) {
            return $gateway['title'];
        }, \Bookly\Backend\Modules\Appearance\Proxy\Shared::paymentGateways( $gateways ) );

        $order = explode( ',', get_option( 'bookly_pmt_order' ) );
        $payment_systems = array();

        if ( $order ) {
            foreach ( $order as $payment_system ) {
                if ( array_key_exists( $payment_system, $gateways ) ) {
                    $payment_systems[ $payment_system ] = $gateways[ $payment_system ];
                    unset( $gateways[ $payment_system ] );
                }
            }
        }

        return array_merge( $payment_systems, $gateways );
    }
    
    /**
     * Remove <script> tags from the given string
     *
     * @param string $html
     * @return string
     */
    public static function stripScripts( $html )
    {
        return preg_replace( '@<script[^>]*?>.*?</script>@si', '', $html );
    }

    /**
     * Prepare html for output (currently allow all tags)
     *
     * @param string $html
     * @return string
     */
    public static function html( $html )
    {
        // Currently, allow any HTML tags
        return $html;
    }

    /**
     * Prepare css for output
     *
     * @param string $css
     * @return string
     */
    public static function css( $css )
    {
        return trim( preg_replace( '#<style[^>]*>(.*)</style>#is', '$1', $css ) );
    }
}