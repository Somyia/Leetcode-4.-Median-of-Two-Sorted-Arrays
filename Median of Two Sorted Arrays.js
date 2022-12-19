var findMedianSortedArrays = function(nums1, nums2) {
    
    
        

    let num=[...nums1,...nums2]
    num.sort(function(a, b){return a-b});
    
    let median;
    
   
  

    
    let length=num.length;
   
    
        let mid = Math.floor(length/2);
        if(length%2==1){
            median=num[mid];
            }
    else{
            median= (num[mid]+num[mid-1])/2.0;
        }
       
            
        

    
    return median;
};
