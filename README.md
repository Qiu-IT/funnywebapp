### Funnywebapp 
Here is my showcase website by **github**. There are some demo projects (Webapp) to show with JQuer/Bootstrap/LayUI/3Djs/React/Vue.

Demo-Project
1. Drum Kit
2. My Clock
3. Tomaten Timer
4. Markdown Viewer

### Code 
``` php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
    $len = count($nums);
    for ($i=0; $i<$len; $i++) {
        for ($j=1+$i; $j<$len; $j++) {
            if($nums[$i]+$nums[$j]==$target)
            {      
               return [$i,$j];
            }
        }
    }
    }
}


