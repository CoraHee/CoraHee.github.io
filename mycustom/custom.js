//花花特效
onload = function () {
    var click_cnt = 0,
        $html = document.getElementsByTagName("html")[0],
        $body = document.getElementsByTagName("body")[0];
    $html.onclick = function (e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#FFC0CB",
            $elem.style.zIndex = 9999,
            $elem.style.position = "absolute",
            $elem.style.select = "none";
        var x = e.pageX, y = e.pageY;
        switch ($elem.style.left = x - 10 + "px", $elem.style.top = y - 20 + "px", clearInterval(anim), ++click_cnt) {
            case 10:
                $elem.innerText = "OωO";
                break;
            case 20:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
                break;
            case 30:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
                break;
            case 40: $elem.innerText = "(๑•̀_•́๑)";
                break;
            case 50:
                $elem.innerText = "（￣へ￣）";
                break;
            case 60:
                $elem.innerText = "(╯°口°)╯(┴—┴";
                break;
            case 70:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 80:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 90:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 100:
            case 101:
            case 102:

            case 103: case 104: case 105: $elem.innerText = "(ꐦ°᷄д°᷅)"; break; default: $elem.innerText = "🌸"
        }$elem.style.fontSize = 10 * Math.random() + 8 + "px"; var increase = 0, anim; setTimeout((function () { anim = setInterval((function () { 150 == ++increase && (clearInterval(anim), $body.removeChild($elem)), $elem.style.top = y - 20 - increase + "px", $elem.style.opacity = (150 - increase) / 120 }), 8) }), 70), $body.appendChild($elem)
    }
};

// 鼠标移动星星特效
(function () { function t() { i(), a() } function i() { document.addEventListener("mousemove", o), document.addEventListener("touchmove", e), document.addEventListener("touchstart", e), window.addEventListener("resize", n) } function n(t) { d = window.innerWidth, window.innerHeight } function e(t) { if (t.touches.length > 0) for (var i = 0; i < t.touches.length; i++) s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() * r.length)]) } function o(t) { u.x = t.clientX, u.y = t.clientY, s(u.x, u.y, r[Math.floor(Math.random() * r.length)]) } function s(t, i, n) { var e = new l; e.init(t, i, n), f.push(e) } function h() { for (var t = 0; t < f.length; t++) f[t].update(); for (t = f.length - 1; t >= 0; t--) f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1)) } function a() { requestAnimationFrame(a), h() } function l() { this.character = "*", this.lifeSpan = 120, this.initialStyles = { position: "fixed", top: "0", display: "block", pointerEvents: "none", "z-index": "10000000", fontSize: "20px", "will-change": "transform" }, this.init = function (t, i, n) { this.velocity = { x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2), y: 1 }, this.position = { x: t - 10, y: i - 20 }, this.initialStyles.color = n, this.element = document.createElement("span"), this.element.innerHTML = this.character, c(this.element, this.initialStyles), this.update(), document.body.appendChild(this.element) }, this.update = function () { this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")" }, this.die = function () { this.element.parentNode.removeChild(this.element) } } function c(t, i) { for (var n in i) t.style[n] = i[n] } var r = ["#D61C59", "#E7D84B", "#1B8798", "#ffaaff", "#aaaaff"], d = window.innerWidth, u = (window.innerHeight, { x: d / 2, y: d / 2 }), f = []; t() })();