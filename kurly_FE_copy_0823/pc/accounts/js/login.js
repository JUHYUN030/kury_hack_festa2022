var id = "test"
            var pw = "test"

            // getId = '${m_id}';
            // getPw = '${password}';

            function check_input(){
                if (!document.login_form.m_id.value){
                    alert("아이디를 입력하세요");
                    document.login_form.m_id.focus();
                    return;
                }
                if (!document.login_form.password.value){
                    alert("비밀번호를 입력하세요");
                    document.login_form.password.focus();
                    return;
                }
                if (document.login_form.m_id.value != id || document.login_form.password.value != pw){
                    alert("아이디 또는 비밀번호가 틀렸습니다.");
                    history.go(0);
                    return;
                }
                document.login_form.submit();

            }