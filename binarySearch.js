function binarySearch (list, value) {
   
    let start = 0
    let end = list.length - 1
    let middle = Math.floor((start + end) / 2)
  
  
    while (list[middle] !== value && start < end) {
      if (value < list[middle]) {
        end = middle - 1
      } else {
        start = middle + 1
      }
  
     
      middle = Math.floor((start + end) / 2)
    }
  
  
    return (list[middle] !== value) ? -1 : middle
  }
  
  var list = [1, 45, 78, 104, 13, 37, 88, 34]
  console.log(binarySearch(list, 104))
  