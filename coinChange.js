function coinChange(amount, change) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= change[0]) 
       {
        left = (amount - change[0]);
        return [change[0]].concat( coinChange(left, change) );
        } 
      else
        {
         change.shift();
         return coinChange(amount, change);
        }
    }
} 
console.log(coinChange(46, [25, 10, 5, 2,1]));