import Controller from '@ember/controller';

export default Controller.extend({
    isVisible : true,
   
    actions: {
        
        makeInvisible(){
            // alert ('added successfully');
             this.set("isVisible",false);
        
        },
        makeVisible()
            {
                this.set("isVisible",true);
            }
        
    
    
    }

});
