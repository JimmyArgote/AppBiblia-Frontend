
export default {

    getIp(callback)
    {
        function response(s)
        {
            callback(window.userip);

            s.onload = s.onerror = null;
            document.body.removeChild(s);
        }

        function trigger()
        {
            window.userip = false;

            var s = document.createElement("script");
            s.async = true;
            s.onload = function() {
                response(s);
            };
            s.onerror = function() {
                response(s);
            };

            s.src = "https://l2.io/ip.js?var=userip";
            document.body.appendChild(s);
        }

        if (/^(interactive|complete)$/i.test(document.readyState)) {
            trigger();
        } else {
            document.addEventListener('DOMContentLoaded', trigger);
        }
    },


    isJson(item) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;
  
        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }
  
        if (typeof item === "object" && item !== null) {
            return true;
        }
  
        return false;
    },

    SplitFullPath: (fullPath) => {
        return fullPath.split('/')
    }

}