const mixedArray = [3,13,74,14,66,15,22,4];
      const isEven = num => {
        return num % 2 == 0;
      }
      const filterArray = (arr, filterfn) =>{
        const filteredarray = [];
        arr.forEach(num => {
          if (filterfn(num)){
            filteredarray.push(num);
          }          
        })
        return filteredarray;
      }

      console.log(filterArray(mixedArray, isEven));