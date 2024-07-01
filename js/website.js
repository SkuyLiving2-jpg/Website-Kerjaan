document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
});

window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('sticky', window.scrollY >= 0);
});

// window.addEventListener("scroll", function() {
//     var e = u.default.scroll;
//     if (e !== h) {
//         var t = e < h ? "up" : "down";
//         a.$win.trigger("scroll:".concat(t), e), h = e
//     }
// });

// var a = function() {
//     if (z.loadMode == 3) {
//         z.loadMode = 2
//     }
//     r()
// };

// return function(e) {
//     var t;
//     if (e = e === true) {
//         o = 33
//     }
//     if (n) {
//         return
//     }
//     n = true;
//     t = r - (u.now() - i);
//     if (t < 0) {
//         t = 0
//     }
//     if (e || t < 9) {
//         s()
//     } else {
//         V(s, t)
//     }
// }

// E.event = {
//     global: {},
//     add: function(t, e, n, i, r) {
//         var o, s, a, l, c, u, d, h, f, p, m, g = $.get(t);
//         if (g)
//             for (n.handler && (n = (o = n).handler, r = o.selector), r && E.find.matchesSelector(F, r), n.guid || (n.guid = E.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
//                     return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
//                 }), c = (e = (e || "").match(T) || [""]).length; c--;) f = m = (a = Z.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = E.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = E.event.special[f] || {}, u = E.extend({
//                 type: f,
//                 origType: m,
//                 data: i,
//                 handler: n,
//                 guid: n.guid,
//                 selector: r,
//                 needsContext: r && E.expr.match.needsContext.test(r),
//                 namespace: p.join(".")
//             }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), E.event.global[f] = !0)
//     }
// }