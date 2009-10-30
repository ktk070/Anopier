<?php

namespace Anopier\Controller;

class User{
    /**
     * @remotable
     */
    public function authenticate($username, $password){
        if ($username=="1" && $password=="1"){
            return "true";
        }
        
        return "false";
    }
    
    /**
     * @remotable
     */
    public function createNewAccount($oUserData){
        print_r($oUserData);
        die();
        if (!$this->validateNewAccountInput($aUserData)){
            return "One or more fields have not been filled in";
        }
        
        return true;
        
    }
    
    private function validateNewAccountInput($oUserData){
        $aRequiredFields = array(
            'username',
            'password',
            'firstName',
            'lastName',
            'email',
            'companyName'
        );
        
        foreach ($aRequiredFields as $field){

        }
        
        return true;
        
    }

}

?>