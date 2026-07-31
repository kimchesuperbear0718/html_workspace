  /* 출력대상의 두자리 처리용 공통 함수*/
        function getNumString(n){
            //어떤 수를 대상으로 할지 결정되지는 않았지만,
            //어떤 수를 대상으로 1자리수의 경우엔 앞에 "0" 문자열 붙이기
            if(n<10){
                n="0"+n;
            }

            console.log(n);
            return n;
        }