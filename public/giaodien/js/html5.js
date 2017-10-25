(function (n) {
    n.fn.html5Uploader = function (t) {
        function e(n) {
            var e = new FileReader,
                t, s, o;
            e.onabort = function (t) {
                if (i.onClientAbort) i.onClientAbort(t, n)
            };
            e.onerror = function (t) {
                if (i.onClientError) i.onClientError(t, n)
            };
            e.onload = function (t) {
                if (i.onClientLoad) i.onClientLoad(t, n)
            };
            e.onloadend = function (t) {
                if (i.onClientLoadEnd) i.onClientLoadEnd(t, n)
            };
            e.onloadstart = function (t) {
                if (i.onClientLoadStart) i.onClientLoadStart(t, n)
            };
            e.onprogress = function (t) {
                if (i.onClientProgress) i.onClientProgress(t, n)
            };
            e.readAsDataURL(n);
            t = new XMLHttpRequest;
            t.upload.onabort = function (t) {
                if (i.onServerAbort) i.onServerAbort(t, n)
            };
            t.upload.onerror = function (t) {
                if (i.onServerError) i.onServerError(t, n)
            };
            t.upload.onload = function (t) {
                if (i.onServerLoad) i.onServerLoad(t, n)
            };
            t.upload.onloadstart = function (t) {
                if (i.onServerLoadStart) i.onServerLoadStart(t, n)
            };
            t.upload.onprogress = function (t) {
                if (i.onServerProgress) i.onServerProgress(t, n)
            };
            t.onreadystatechange = function (r) {
                if (i.onServerReadyStateChange) i.onServerReadyStateChange(r, n, t.readyState);
                if (i.onSuccess && t.readyState == 4 && t.status == 200) i.onSuccess(r, n, t.responseText);
                if (i.onServerError && t.readyState == 2 && t.status == 500) i.onServerError(r, n)
            };
            t.open("POST", i.postUrl, !0);
            n.getAsBinary ? (s = f + u + r + 'Content-Disposition: form-data;name="' + i.name + '";filename="' + unescape(encodeURIComponent(n.name)) + '"' + r + "Content-Type: application/octet-stream" + r + r + n.getAsBinary() + r + f + u + f, t.setRequestHeader("Content-Type", "multipart/form-data;boundary=" + u), t.sendAsBinary(s)) : window.FormData && (o = new FormData, o.append(i.name, n), t.send(o))
        }
        var r = "\r\n",
            u = "iloveigloo",
            f = "--",
            i = {
                name: "uploadedFile",
                postUrl: "Upload.ashx",
                onClientAbort: null,
                onClientError: null,
                onClientLoad: null,
                onClientLoadEnd: null,
                onClientLoadStart: null,
                onClientProgress: null,
                onServerAbort: null,
                onServerError: null,
                onServerLoad: null,
                onServerLoadStart: null,
                onServerProgress: null,
                onServerReadyStateChange: null,
                onSuccess: null
            };
        return t && n.extend(i, t), this.each(function () {
            var t = n(this);
            t.is('[type="file"]') ? t.bind("change", function () {
                for (var t = this.files, n = 0; n < t.length; n++) e(t[n])
            }) : t.bind("dragenter dragover", function () {
                return !1
            }).bind("drop", function (n) {
                for (var i = n.originalEvent.dataTransfer.files, t = 0; t < i.length; t++) e(i[t]);
                return !1
            })
        })
    }
})(jQuery);
/*
//# sourceMappingURL=jquery.html5uploader.min.js.map
*/
