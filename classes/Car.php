<?php
// vim: sw=4:ts=4:fdc=4:nospell
    class Car {
        /**
          * @remotable
          */
        public function start() {
            return "Started";
        } // eo function start
 
        /**
          * @remotable
          */
        public function go($speed) {
            if(0 >= $speed || 200 < $speed) {
                throw new Exception("Speed must be between 0 and 200");
            }
            return "The speed is $speed";
        } 
 
        /**
          * @remotable
          */
        public function stop() {
            return "Stopped";
        } // eo function stop
 
        public function repair() {
            return "Done";
        } // eo function repair
 
    } // eo class car
?>