export default function(top){
    if(top == 0){
        let timer = setInterval(() => {
            document.documentElement.scrollTop = document.documentElement.scrollTop - 150
            if(document.documentElement.scrollTop <= 0){
                clearInterval(timer)
            }
        }, 10)
    }else{
        if(document.documentElement.scrollTop < top){
            let timer = setInterval(() => {
                document.documentElement.scrollTop += 50;
                if(document.documentElement.scrollTop >= top){
                    clearInterval(timer);
                }
            }, 2);
        }else{
            let timer = setInterval(() => {
                document.documentElement.scrollTop -= 50;
                if(document.documentElement.scrollTop <= top){
                    clearInterval(timer);
                }
            }, 2);
        }
    }
}
