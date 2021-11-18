<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\personalrubens\wordpress\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'piunivesp' );

/** MySQL database username */
define( 'DB_USER', 'usrpiunivesp' );

/** MySQL database password */
define( 'DB_PASSWORD', '1q2w3e4r5t@' );

/** MySQL hostname */
define( 'DB_HOST', 'piunivesp.mysql.uhserver.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'kb#i8r^+okWQrtVc/Pnzk5KM}IV-~*z(XpYIou{{[SLnHVF82X1j-9F@M*cfUj*f' );
define( 'SECURE_AUTH_KEY',  'WWN0eLMo.RTid;AE8D(vz+#vxlZ$]y48,H}_Y%lG0KoBG /2//Xf;`5b?G; W2e>' );
define( 'LOGGED_IN_KEY',    'O-6RD&yJTdHMTsVY#Os@J{ZNTBoujPn8@5 =07:)-l_<+a<OB}h-O`XLnvatc#t}' );
define( 'NONCE_KEY',        ':T{O[6m[_>ts^x/Ej(^]goe*iJE_:y5/g51lZM9/`( (hYRk1I7pW6(y^(qm||VU' );
define( 'AUTH_SALT',        ',VfD`Y=*J<W jy*BtH0mEt0,b:t2Q2.)MaN^%3.1D5 {IP9K7!8O4BxUtrg6^H$Y' );
define( 'SECURE_AUTH_SALT', '$7>C&@Oow^$Tga6t&f]^_$>rEK7SsjEXvD[;v%b9?XXW)h,B[;2]b@(k(O=D1svO' );
define( 'LOGGED_IN_SALT',   'yVZ&Nao.,+_zSAs*vTJ?PJKelf21l5mnfm_RujoEG8^Q>M#p6Df+V/a]EK,5KFbw' );
define( 'NONCE_SALT',       ' ov;v0g&u,Svs-.ERGm?@=E{BNm~V1D*2I/wTP&,{8(B&]q;WWfe:yx4U9c`zi$C' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'TB_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
