<?php

class IndexController extends Zend_Controller_Action
{
    /*public function indexAction()
    {
    	$client = new Zend_Http_Client();
		$client->setUri('https://app.alegra.com/api/v1/contacts/');
		$client->setAuth('oscar.saavedra163@gmail.com', 'c277ae8c8e5e3c3c6250');
		$response = $client->request('GET');
        $this->_helper->json(json_decode($response->getBody()));
        //$this->view->variable = $response->getBody();
    }*/

    public function init()
      {
        $this->_helper->viewRenderer->setNoRender(true);
      }

      public function indexAction()
      {
        $client = new Zend_Http_Client();
        $client->setUri('https://app.alegra.com/api/v1/contacts/');
        $client->setAuth('oscar.saavedra163@gmail.com', 'c277ae8c8e5e3c3c6250');
        $response = $client->request('GET');
        $this->_helper->json(json_decode($response->getBody()));
      }

      public function getAction()
      {
        echo Zend_Json::encode($this->_todo);
      }

      public function postAction()
      {
        // action body
      }

      public function putAction()
      {
        // action body
      }

      public function deleteAction()
      {
        // action body
      }

}

