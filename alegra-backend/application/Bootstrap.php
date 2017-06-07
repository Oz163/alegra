<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	public function _initRoutes()
	{

	  $front = Zend_Controller_Front::getInstance();

	  $router = $front->getRouter();

	  $restRoute = new Zend_Rest_Route($front);
	  $router->addRoute('default', $restRoute);

	  Zend_Registry::set('email', "oscar.saavedra163@gmail.com");

	   Zend_Registry::set('token', "c277ae8c8e5e3c3c6250");

	   Zend_Registry::set('uri', "https://app.alegra.com/api/v1");
	}
}

