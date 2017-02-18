
    var ans = "";
    var aCalc = false;
    var calc = "";

    function Cal(text) {
        if (text === "")return false;
        if (parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
            if (aCalc) {
                calc = text;
                aCalc = false;
            } else {
                calc += text;
            }
            $(".textbox").val(calc);
        } else if (text === "全清") {
            calc = "";
            $(".textbox").val("");
            aCalc = false;
        } else if (text === "退格") {
            calc = calc.slice(0, -1);
            $(".textbox").val(calc);
        } else if (text === "=") {
            ans = eval(calc);//在按下等号后执行计算（因为所有的输入只能通过虚拟键盘或者个别按键输入，所以输入内容是安全的，故可以直接采用eval进行计算，否则需要进行容错防备处理）
            if (typeof  ans === "number") {//数字时可以进行计算
                $(".textbox").val(ans);
                calc = "";
                aCalc = true;
            }
        }

    }

    $(document).ready(function () {
        $(document).keypress(function (event) {
            var text;
            text = String.fromCharCode(event.which);
            Cal(text);
        });
        $(document).keydown(function (event) {
            var text;
            switch (event.keyCode) {
                case 8:
                    text = "退格";
                    break;
                case 12:
                    text = "全清";
                    break;
                case 13:
                    text = "=";
                    break;
                case 46:
                    text = "全清";
                    break;
                case 106:
                    text="*";
                    break;
                case 107:
                    text="+";
                    break;
                case 109:
                    text="-";
                    break;
                case 111:
                    text="/";
                    break;
                default:
                    text = "";
                    break;
            }
            Cal(text);
        });
        $("button").click(function () {
            var text = $(this).attr("value");
            Cal(text);
        });

    });

