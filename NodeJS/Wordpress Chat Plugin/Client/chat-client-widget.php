<?php
/*
Plugin Name: Airshp Hosted Chat Widget
Plugin URI: 
Description: NodeJS Chat widget hosted on a NodeJitsu Server
Author: Zachary Earle
Version: 1
Author URI: 
*/

add_action( 'widgets_init', 'my_widget' );


function my_widget() {
	register_widget( 'AirshpChat' );
}

class AirshpChat extends WP_Widget {

	function AirshpChat() {
		$widget_ops = array( 'classname' => 'example', 'description' => __('A widget that adds a hosted chat feature.', 'example') );
		
		$control_ops = array( 'width' => 300, 'height' => 350, 'id_base' => 'example-widget' );
		
		$this->WP_Widget( 'example-widget', __('Airshp Chat', 'example'), $widget_ops, $control_ops );
	}
	
	function widget( $args, $instance ) {
		extract( $args );

		//Our variables from the widget settings.
		$title = '';
		$username = $current_user->user_login;
		$show_info = isset( $instance['show_info'] ) ? $instance['show_info'] : false;

		echo $before_widget;

		// Display the widget title 
		echo $before_title . $title . $after_title;

		//Display the name 
		echo "
		<script type='text/javascript' src='http://code.jquery.com/jquery-latest.min.js'></script>
		<script type='text/javascript' src='http://webchattest.nodejitsu.com:80/socket.io/socket.io.js'></script>
		<script type='text/javascript' src='https://rawgithub.com/zearle90/Tests-and-Samples/master/NodeJS/Wordpress%20Chat%20Plugin/Server/client.js'></script>
		<div id = 'content' style = 'height: 300px; margin: 0 0 20px 0; border: solid 1px #999; overflow-y: scroll;'>		
		</div>
		<div class = 'controls'>
			Name: <input id = 'name' type = 'text'></input>
			<br />
			<input id = 'field' type = 'text'></input>
			<input id = 'send' type = 'button' value = 'send'></input>
		</div>
    ";
		
		if ( $show_info )
			printf( $name );

		
		echo $after_widget;
	}

	//Update the widget 
	 
	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;

		//Strip tags from title and name to remove HTML 
		$instance['title'] = strip_tags( $new_instance['title'] );
		$instance['name'] = strip_tags( $new_instance['name'] );
		$instance['show_info'] = $new_instance['show_info'];

		return $instance;
	}

	
	function form( $instance ) {

	
	}
}

?>
