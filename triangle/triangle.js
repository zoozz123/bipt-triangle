var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ; 
    	    if(b!=c) return false ;
    	    if(a<=0) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
		     
			 if(((a==b)||(a==c)||(b==c))&&(a+b>c)&&(a+c>b)&&(b+c>a)) return true;
			 else 
				 return false;
    	    
    },
	isScalene :  function(a,b,c) {
		     if(a+b<=c) return false;
			 if(a+c<=b) return false;
			 if(b+c<=a) return false;
			 
    	    return true ;
	}
};

