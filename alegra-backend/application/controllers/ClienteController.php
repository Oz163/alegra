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
        $client->setUri(Zend_Registry::get('uri')."/contacts");
        $client->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        $response = $client->request('GET');
        $this->_helper->json(json_decode($response->getBody()));
      }

      public function getAction()
      {
      	$id = $this->_getParam('id');
        $client = new Zend_Http_Client();
        $client->setUri(Zend_Registry::get('uri')."/contacts"."/".$id);
        $client->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        $response = $client->request('GET');
        $this->_helper->json(json_decode($response->getBody()));
      }

      public function postAction()
      {
      	$json = json_encode($this->getRequest()->getRawBody());	
        $client = new Zend_Http_Client();
        $client->setUri(Zend_Registry::get('uri')."/contacts");
        $client->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
    
        $client->setHeaders('Content-type','application/json');
        $client->setRawData(json_decode($json), null);

        $response = $client->request('POST');

        $this->_helper->json(json_decode($response->getBody()));
      }

      public function putAction()
      {
      	$json = json_encode($this->getRequest()->getRawBody());
      	$id = $this->_getParam('id');
        $client = new Zend_Http_Client();
        $client->setUri(Zend_Registry::get('uri')."/contacts"."/".$id);
        $client->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        
        
        $client->setHeaders('Content-type','application/json');
        $client->setRawData(json_decode($json), null);

        $response = $client->request('PUT');

        $this->_helper->json(json_decode($response->getBody()));
      }

      public function deleteAction()
      {
        $id = $this->_getParam('id');
        $client = new Zend_Http_Client();
        $client->setUri(Zend_Registry::get('uri')."/contacts"."/".$id);
        $client->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        $client->setHeaders('Content-type','application/json');

        $response = $client->request('DELETE');

        $this->_helper->json(json_decode($response->getBody()));
      }


}

