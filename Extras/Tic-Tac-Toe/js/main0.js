import { camp_move } from './main0.js';
export const eval_pos = function(form) {
    if ((form.a0.value!="" && 

    form.a0.value==form.a3.value && form.a0.value==form.a6.value)||
      (form.a0.value!="" 
    && form.a0.value==form.a1.value && form.a0.value==form.a2.value) ||
      (form.a0.value!="" 
    && form.a0.value==form.a4.value && form.a0.value==form.a8.value) ||
      (form.a1.value!="" 
    && form.a1.value==form.a4.value && form.a1.value==form.a7.value) ||
      (form.a2.value!="" 
    && form.a2.value==form.a5.value && form.a2.value==form.a8.value) ||
      (form.a2.value!="" 
    && form.a2.value==form.a4.value && form.a2.value==form.a6.value) ||
      (form.a3.value!="" 
    && form.a3.value==form.a4.value && form.a3.value==form.a5.value) ||
      (form.a6.value!="" 
    && form.a6.value==form.a7.value && form.a6.value==form.a8.value)) {
        return true;
         
    }else{
        return false;
    }
}

export const get_move = function(form) {
    let cost;
    let bestCost = -2;
    let bestMove = "";

    if (step++ === 0){
        if (form.a4.value === ""){
            return "a4";
        }else if (form.a0.value === ""){
            return "a0";
        }
    }
    for (let i = 0; i < 9; i++) {
        let localPosition = 'a'+i;
        
        if (form[localPosition].value !== ""){
            continue;
            form[localPosition].value = "O";
            cost = camp_move(form,"X", -1, 0);
            if (cost > bestCost) {
                if (cost === 1){
                    i = 9;
                    bestMove = localPosition;
                    bestCost = cost;
                }
                form[localPosition].value = "";
            }
        
        }
    }
    return bestMove;
}


