<?php

class ClienteController extends Zend_Controller_Action
{

    public function init()
      {
        $this->_helper->viewRenderer->setNoRender(true);
      }

      public function indexAction()
      {
        $client = new Zend_Http_Client();
        $client->setUri('https://app.alegra.com/api/v1/contacts');
        $client->setAuth('oscar.saavedra163@gmail.com', 'c277ae8c8e5e3c3c6250');
        $response = $client->request('GET');
        $this->_helper->json(json_decode($response->getBody()));
      }

      public function getAction()
      {
      	$id = $this->_getParam('id');
        $client = new Zend_Http_Client();
        $client->setUri('https://app.alegra.com/api/v1/contacts/'.$id);
        $client->setAuth('oscar.saavedra163@gmail.com', 'c277ae8c8e5e3c3c6250');
        $response = $client->request('GET');
        $this->_helper->json(json_decode($response->getBody()));
      }

      public function postAction()
      {
      	$json = json_encode('{"name":"Prueba3"}');	
        $client = new Zend_Http_Client();
        $client->setUri('https://app.alegra.com/api/v1/contacts');
        $client->setAuth('oscar.saavedra163@gmail.com', 'c277ae8c8e5e3c3c6250');
    
        $client->setHeaders('Content-type','application/json');
        $client->setRawData(json_decode($json), null);


        $response = $client->request('POST');

        $this->_helper->json(json_decode($response->getBody()));
      }

      public function putAction()
      {
      	$json = json_encode('{"name":"Prueba3"}');
      	$id = $this->_getParam('id');
        $client = new Zend_Http_Client();
        $client->setUri('https://app.alegra.com/api/v1/contacts/'.$id);
        $client->setAuth('oscar.saavedra163@gmail.com', 'c277ae8c8e5e3c3c6250');
        

        $client->setHeaders('Content-type','application/json');
        $client->setRawData(json_decode($json), null);

        $response = $client->request('PUT');

        $this->_helper->json(json_decode($response->getBody()));
      }

      public function deleteAction()
      {
        $id = $this->_getParam('id');
        $client = new Zend_Http_Client();
        $client->setUri('https://app.alegra.com/api/v1/contacts/'.$id);
        $client->setAuth('oscar.saavedra163@gmail.com', 'c277ae8c8e5e3c3c6250');
        $client->setHeaders('Content-type','application/json');

        $response = $client->request('DELETE');

        $this->_helper->json(json_decode($response->getBody()));
      }


}

