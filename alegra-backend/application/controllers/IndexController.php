<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
    	$client = new Zend_Http_Client();
		$client->setUri('https://app.alegra.com/api/v1/contacts/');
		$client->setAuth('oscar.saavedra163@gmail.com', 'c277ae8c8e5e3c3c6250');
		$response = $client->request('GET');

        $this->view->variable = $response;
    }


}

