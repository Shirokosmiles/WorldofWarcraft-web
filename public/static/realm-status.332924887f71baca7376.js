(window.webpackJsonp = window.webpackJsonp || []).push([[39], {
    1096: function(e, a, t) {
        "use strict";
        t.r(a);
        t(90);
        var r = t(75)
            , n = t(0)
            , o = t.n(n)
            , i = t(35)
            , s = t.n(i)
            , l = t(67)
            , u = t(51)
            , c = t.n(u)
            , m = t(22)
            , d = t(64)
            , p = t(95)
            , f = t(12)
            , g = t(50)
            , h = t(49)
            , v = t(1)
            , b = t.n(v)
            , y = t(18)
            , S = t(84)
            , R = t(500)
            , E = t.n(R)
            , T = t(501)
            , k = t.n(T)
            , w = t(23)
            , C = t.n(w)
            , N = t(127)
            , z = o.a.createContext({})
            , I = z.Provider;
        z.Consumer;
        function P(e) {
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
            )(e)
        }
        function F(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || function(e, a) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return O(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return O(e, a)
            }(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function O(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        function A(e, a, t, r, n, o, i) {
            try {
                var s = e[o](i)
                    , l = s.value
            } catch (e) {
                return void t(e)
            }
            s.done ? a(l) : Promise.resolve(l).then(r, n)
        }
        function G(e) {
            return function() {
                var a = this
                    , t = arguments;
                return new Promise((function(r, n) {
                        var o = e.apply(a, t);
                        function i(e) {
                            A(o, r, n, i, s, "next", e)
                        }
                        function s(e) {
                            A(o, r, n, i, s, "throw", e)
                        }
                        i(void 0)
                    }
                ))
            }
        }
        function j(e, a) {
            if (!(e instanceof a))
                throw new TypeError("Cannot call a class as a function")
        }
        function U(e, a) {
            for (var t = 0; t < a.length; t++) {
                var r = a[t];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        function W(e, a) {
            return (W = Object.setPrototypeOf || function(e, a) {
                    return e.__proto__ = a,
                        e
                }
            )(e, a)
        }
        function x(e) {
            var a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                        !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var t, r = M(e);
                if (a) {
                    var n = M(this).constructor;
                    t = Reflect.construct(r, arguments, n)
                } else
                    t = r.apply(this, arguments);
                return B(this, t)
            }
        }
        function B(e, a) {
            if (a && ("object" === P(a) || "function" == typeof a))
                return a;
            if (void 0 !== a)
                throw new TypeError("Derived constructors may only return object or undefined");
            return V(e)
        }
        function V(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function M(e) {
            return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
            )(e)
        }
        function D(e, a, t) {
            return a in e ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[a] = t,
                e
        }
        var L = function(e) {
            !function(e, a) {
                if ("function" != typeof a && null !== a)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    Object.defineProperty(e, "prototype", {
                        writable: !1
                    }),
                a && W(e, a)
            }(u, e);
            var a, t, r, n, i, s, l = x(u);
            function u() {
                var e;
                j(this, u);
                for (var a = arguments.length, t = new Array(a), r = 0; r < a; r++)
                    t[r] = arguments[r];
                return D(V(e = l.call.apply(l, [this].concat(t))), "state", {
                    categories: void 0,
                    categoryFilterSelection: void 0,
                    activeRegionKey: void 0,
                    compoundRegionGameVersionSlug: void 0,
                    activeGameVersionKey: e.props.activeGameVersion,
                    allGameVersions: [],
                    allRegions: [],
                    allRealms: [],
                    activeRealms: [],
                    isLoading: !0,
                    didRecoverableErrorOccur: !1
                }),
                    e
            }
            return a = u,
                t = [{
                    key: "componentDidMount",
                    value: function() {
                        this.fetchInitialPageData()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var a = this.props.compoundRegionGameVersionSlug;
                        a !== e.compoundRegionGameVersionSlug && this.fetchAndUpdateRealmsData({
                            compoundRegionGameVersionSlug: a
                        })
                    }
                }, {
                    key: "generateCategoryFilterEntriesForRealms",
                    value: function(e) {
                        return new Set(e.map((function(e) {
                                return e.category
                            }
                        )))
                    }
                }, {
                    key: "fetchInitialPageData",
                    value: (s = G(regeneratorRuntime.mark((function e() {
                                var a, t, r, n, o, i, s, l, u, c, m, d;
                                return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return a = this.props,
                                                        t = a.getInitialData,
                                                        r = a.compoundRegionGameVersionSlug,
                                                        e.next = 3,
                                                        t(r);
                                                case 3:
                                                    if (n = e.sent,
                                                        o = n.realms,
                                                        i = n.regions,
                                                        s = n.gameVersions,
                                                        l = n.errors,
                                                        u = !this.areRealmsValid(o),
                                                        c = l && l.length,
                                                        m = i && i.length && s && s.length,
                                                    !c && !u || !m) {
                                                        e.next = 10;
                                                        break
                                                    }
                                                    return e.abrupt("return", this.setState({
                                                        isLoading: !1,
                                                        didRecoverableErrorOccur: !0,
                                                        allRealms: [],
                                                        activeRealms: [],
                                                        allRegions: i,
                                                        allGameVersions: s,
                                                        categories: [],
                                                        categoryFilterSelection: void 0
                                                    }));
                                                case 10:
                                                    return d = this.generateCategoryFilterEntriesForRealms(o),
                                                        e.abrupt("return", this.setState({
                                                            isLoading: !1,
                                                            didRecoverableErrorOccur: !1,
                                                            allRegions: i,
                                                            allRealms: o,
                                                            activeRealms: o,
                                                            allGameVersions: s,
                                                            categories: d,
                                                            categoryFilterSelection: void 0
                                                        }));
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e, this)
                            }
                        ))),
                            function() {
                                return s.apply(this, arguments)
                            }
                    )
                }, {
                    key: "filterByCategoryFilterSelection",
                    value: function() {
                        var e = this.state
                            , a = e.allRealms
                            , t = e.categoryFilterSelection
                            , r = a;
                        return void 0 !== t && (r = r.filter((function(e) {
                                return "any" === t.category || t.category === e.category
                            }
                        ))),
                            r
                    }
                }, {
                    key: "onRegionSelectionChange",
                    value: function(e) {
                        var a = this.state.activeGameVersionKey
                            , t = this.props.defaultGameVersionKey
                            , r = u.buildCompoundRegionGameVersionSlug({
                            regionSlug: e,
                            gameVersionKey: a,
                            defaultGameVersionKey: t
                        });
                        this.navigateToRegion(r)
                    }
                }, {
                    key: "onGameVersionSelectionChange",
                    value: function(e) {
                        var a = this.state.activeRegionKey
                            , t = this.props.defaultGameVersionKey
                            , r = u.buildCompoundRegionGameVersionSlug({
                            regionSlug: a,
                            gameVersionKey: e,
                            defaultGameVersionKey: t
                        });
                        this.navigateToRegion(r)
                    }
                }, {
                    key: "navigateToRegion",
                    value: function(e) {
                        var a = this.props.locale.toLowerCase();
                        N.a.navigateTo("/".concat(a, "/game/status/").concat(e))
                    }
                }, {
                    key: "updateCategoryFilterSelection",
                    value: (i = G(regeneratorRuntime.mark((function e(a) {
                                var t = this;
                                return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    this.setState({
                                                        categoryFilterSelection: a
                                                    }, (function() {
                                                            var e = t.filterByCategoryFilterSelection();
                                                            t.setState({
                                                                activeRealms: e
                                                            })
                                                        }
                                                    ));
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e, this)
                            }
                        ))),
                            function(e) {
                                return i.apply(this, arguments)
                            }
                    )
                }, {
                    key: "fetchAndUpdateRealmsData",
                    value: (n = G(regeneratorRuntime.mark((function e(a) {
                                var t, r, n, o, i, s, l, u, c, m = this;
                                return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (t = a.compoundRegionGameVersionSlug,
                                                    !0 !== this.state.didRecoverableErrorOccur) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return this.setState({
                                                        isLoading: !0
                                                    }),
                                                        e.next = 7,
                                                        new Promise((function(e) {
                                                                setTimeout(e, 650)
                                                            }
                                                        ));
                                                case 7:
                                                    e.next = 10;
                                                    break;
                                                case 9:
                                                    r = setTimeout((function() {
                                                            m.setState({
                                                                isLoading: !0
                                                            })
                                                        }
                                                    ), this.props.engageLoadingStateDelay);
                                                case 10:
                                                    return n = {
                                                        forceFetch: !0
                                                    },
                                                        e.next = 13,
                                                        this.props.getRealms(t, n);
                                                case 13:
                                                    if (o = e.sent,
                                                        i = o.realms,
                                                        s = o.errors,
                                                    r && clearTimeout(r),
                                                        l = s && s.length,
                                                        u = !this.areRealmsValid(i),
                                                    !l && !u) {
                                                        e.next = 22;
                                                        break
                                                    }
                                                    return this.setState({
                                                        isLoading: !1,
                                                        didRecoverableErrorOccur: !0,
                                                        allRealms: [],
                                                        activeRealms: []
                                                    }),
                                                        e.abrupt("return");
                                                case 22:
                                                    c = this.generateCategoryFilterEntriesForRealms(i),
                                                        this.setState({
                                                            isLoading: !1,
                                                            didRecoverableErrorOccur: !1,
                                                            allRealms: i,
                                                            activeRealms: i,
                                                            categories: c,
                                                            categoryFilterSelection: void 0
                                                        });
                                                case 24:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e, this)
                            }
                        ))),
                            function(e) {
                                return n.apply(this, arguments)
                            }
                    )
                }, {
                    key: "areRealmsValid",
                    value: function(e) {
                        if (!e || 0 === e.length)
                            return !1;
                        for (var a = 0; a < e.length; a++)
                            if (!e[a])
                                return !1;
                        return !0
                    }
                }, {
                    key: "buildContextValue",
                    value: function() {
                        var e = this.state;
                        return {
                            isLoading: e.isLoading,
                            didRecoverableErrorOccur: e.didRecoverableErrorOccur,
                            allGameVersions: e.allGameVersions,
                            activeGameVersionKey: e.activeGameVersionKey,
                            categories: e.categories,
                            categoryFilterSelection: e.categoryFilterSelection,
                            allRealms: e.allRealms,
                            activeRealms: e.activeRealms,
                            allRegions: e.allRegions,
                            activeRegionKey: e.activeRegionKey,
                            updateCategoryFilterSelection: C()(this, "updateCategoryFilterSelection"),
                            onRegionSelectionChange: C()(this, "onRegionSelectionChange"),
                            onGameVersionSelectionChange: C()(this, "onGameVersionSelectionChange")
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.buildContextValue();
                        return o.a.createElement(I, {
                            value: e
                        }, this.props.children)
                    }
                }],
                r = [{
                    key: "getDerivedStateFromProps",
                    value: function(e, a) {
                        var t = e.compoundRegionGameVersionSlug;
                        if (t === a.compoundRegionGameVersionSlug)
                            return null;
                        var r = F(u.getRegionVersionKeysFromSlug(t), 2)
                            , n = r[0];
                        return {
                            activeRegionKey: r[1],
                            activeGameVersionKey: n,
                            compoundRegionGameVersionSlug: t
                        }
                    }
                }, {
                    key: "getRegionVersionKeysFromSlug",
                    value: function(e) {
                        var a = F(e.split("-"), 2)
                            , t = a[0]
                            , r = a[1]
                            , n = u.defaultProps.activeGameVersion;
                        return r || (r = t,
                            t = n),
                            [t, r]
                    }
                }, {
                    key: "buildCompoundRegionGameVersionSlug",
                    value: function(e) {
                        var a = e.regionSlug
                            , t = e.gameVersionKey
                            , r = "";
                        return t !== e.defaultGameVersionKey && (r = "".concat(t, "-")),
                            r = "".concat(r).concat(a)
                    }
                }],
            t && U(a.prototype, t),
            r && U(a, r),
                Object.defineProperty(a, "prototype", {
                    writable: !1
                }),
                u
        }(o.a.Component);
        L.propTypes = {
            locale: b.a.number,
            compoundRegionGameVersionSlug: b.a.string,
            activeGameVersion: b.a.string,
            defaultGameVersionKey: b.a.string,
            getInitialData: b.a.func,
            getRealms: b.a.func,
            engageLoadingStateDelay: b.a.number
        },
            L.defaultProps = {
                compoundRegionGameVersionSlug: "us",
                activeGameVersion: "mainline",
                defaultGameVersionKey: "mainline",
                engageLoadingStateDelay: 0
            };
        var K = L
            , _ = t(7)
            , q = t(42)
            , X = function() {
            return Object(n.useContext)(z)
        }
            , Y = (t(471),
            t(131))
            , $ = t(3)
            , H = t(98)
            , Z = t(17)
            , J = t(87)
            , Q = t(38)
            , ee = function(e) {
            var a = e.shouldRenderColumn
                , t = e.isLoading
                , r = e.showError
                , n = e.showNoResultsMessage
                , i = e.rows
                , s = e.headers
                , l = Object(_.a)().msg
                , u = l(r ? "game.status.errors.recoverableError" : "PagedTable.table.emptyText");
            return o.a.createElement("div", {
                className: "RealmsTable"
            }, o.a.createElement(J.e, {
                className: "SortTable--flex",
                rows: t ? [] : i,
                headers: s,
                shouldRenderColumn: a,
                initialSortingIndex: 1
            }), t && o.a.createElement("div", {
                className: "position-relative margin-top-huge"
            }, o.a.createElement(Q.a, {
                className: "Spinner--donut Spinner--large position-centered"
            })), (r || n) && o.a.createElement("div", {
                className: "RealmsTable-noResultsMessage"
            }, o.a.createElement("div", {
                className: "contain-medium align-center"
            }, u)))
        };
        ee.propTypes = {
            shouldRenderColumn: b.a.func,
            isLoading: b.a.bool,
            showError: b.a.bool,
            showNoResultsMessage: b.a.bool,
            rows: b.a.array,
            headers: b.a.array
        };
        var ae = ee;
        function te(e) {
            return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
            )(e)
        }
        var re = {
            type: "medium",
            population: "large",
            timezone: "wide"
        }
            , ne = {
            OFFLINE: -1,
            RECOMMENDED: 0,
            LOW: 1,
            MEDIUM: 2,
            HIGH: 3,
            FULL: 4
        }
            , oe = function(e, a, t) {
            var r = ne[e.value]
                , n = ne[a.value]
                , o = (r = void 0 !== r ? r : -99) > (n = void 0 !== n ? n : -99) ? 1 : -1;
            return t && (o = r > n ? -1 : 1),
                o
        }
            , ie = function() {
            var e = Object($.a)().mediaIsAtLeastBreakpoint
                , a = Object(_.a)().msg
                , t = Object(n.useContext)(S.a).searchTerm
                , r = X()
                , i = r.isLoading
                , s = r.didRecoverableErrorOccur
                , l = r.activeRealms
                , u = Object(n.useMemo)((function() {
                    var e = l;
                    return t && (e = Object(Y.a)(l, t, {
                        keys: [{
                            key: "name",
                            threshold: Y.b.CONTAINS
                        }]
                    })),
                        e
                }
            ), [l, t])
                , c = Object(n.useCallback)((function(a) {
                    var t = "object" === te(a) ? a.value : a
                        , r = re[t];
                    return !r || e(r)
                }
            ), [])
                , m = Object(n.useMemo)((function() {
                    return [{
                        value: "status",
                        display: a("game.status.table.status")
                    }, {
                        value: "realm",
                        display: a("game.status.table.realm")
                    }, {
                        value: "type",
                        display: a("game.status.table.type")
                    }, {
                        value: "population",
                        display: a("game.status.table.population"),
                        customComparator: oe
                    }, {
                        value: "timezone",
                        display: a("game.status.table.timezone")
                    }, {
                        value: "category",
                        display: a("game.status.table.locale")
                    }, {
                        value: "players",
                        display: a("game.status.table.players")
                    }]
                }
            ), [])
                , d = Object(n.useMemo)((function() {
                    return u.map((function(e) {
                            var t = e.online ? "checkCircleGreen" : "closeCircleRed"
                                , r = e.online ? "".concat(e.population.name) : a("game.status.realm.population.offline");
                            return {
                                key: e.slug,
                                cells: [{
                                    value: e.online,
                                    display: function() {
                                        return o.a.createElement(Z.a, {
                                            iconName: t
                                        })
                                    }
                                }, {
                                    value: e.name,
                                    display: function() {
                                        return Object(H.a)(e.name)
                                    }
                                }, e.type.name, {
                                    value: e.online ? e.population.enum : -99,
                                    display: r
                                }, e.timezone, e.category, e.players]
                            }
                        }
                    ))
                }
            ), [u, i]);
            return o.a.createElement(ae, {
                realms: u,
                shouldRenderColumn: c,
                isLoading: i,
                headers: m,
                rows: d,
                showError: s && !i,
                showNoResultsMessage: !u.length && !i
            })
        }
            , se = t(141)
            , le = function() {
            var e = Object(_.a)().msg;
            return o.a.createElement("div", {
                className: "contain-masthead align-center"
            }, o.a.createElement("div", {
                className: "font-semp-xxxLarge-white"
            }, e("game.status.title")), o.a.createElement("div", {
                className: "space-rhythm-medium"
            }), o.a.createElement(se.a, null, o.a.createElement("span", {
                className: "font-bliz-light-small-beige",
                dangerouslySetInnerHTML: {
                    __html: e("game.status.desc.large.html")
                }
            })))
        }
            , ue = t(14)
            , ce = t(66)
            , me = function(e) {
            var a = e.className
                , t = X()
                , r = t.activeGameVersionKey
                , n = t.allGameVersions
                , i = t.onGameVersionSelectionChange
                , s = n.map((function(e) {
                    return {
                        name: e.name,
                        key: e.key,
                        slug: e.slug,
                        active: e.key === r
                    }
                }
            ));
            return o.a.createElement("div", {
                className: a
            }, o.a.createElement(ce.a, {
                className: "HorizontalNav--gutters",
                items: s,
                onItemSelect: function(e) {
                    i(e.key)
                }
            }))
        };
        me.propTypes = {
            className: b.a.string
        };
        var de = me
            , pe = t(2)
            , fe = t.n(pe)
            , ge = t(130);
        function he(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || function(e, a) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return ve(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return ve(e, a)
            }(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ve(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        var be = function(e) {
            var a = e.className
                , t = X()
                , r = t.activeGameVersionKey
                , n = t.allGameVersions
                , i = t.onGameVersionSelectionChange
                , s = Object($.a)()
                , l = s.mediaProps
                , u = s.mediaClassnames
                , c = n.map((function(e) {
                    return {
                        name: e.name,
                        key: e.key,
                        slug: e.slug,
                        selected: e.key === r
                    }
                }
            ));
            return o.a.createElement("div", {
                className: a
            }, o.a.createElement(ge.a, {
                style: l({
                    large: {
                        minWidth: "200px"
                    }
                }),
                className: fe()("SelectMenu--flushItems", u({
                    original: "width-full",
                    large: "!width-full SelectMenu--small"
                })),
                items: c,
                onChange: function(e) {
                    var a = he(e, 1)[0];
                    i(a.key)
                }
            }))
        };
        be.propTypes = {
            className: b.a.string
        };
        var ye = be;
        function Se(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || function(e, a) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Re(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return Re(e, a)
            }(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Re(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        var Ee = function(e) {
            var a = e.className
                , t = X()
                , r = t.activeRegionKey
                , i = t.allRegions
                , s = t.onRegionSelectionChange
                , l = Object(_.a)().msg
                , u = Object($.a)()
                , c = u.mediaClassnames
                , m = u.mediaProps
                , d = Object(n.useMemo)((function() {
                    return i.sort((function(e, a) {
                            return e.name.localeCompare(a.name)
                        }
                    )).map((function(e) {
                            return {
                                name: e.name,
                                key: e.key,
                                selected: e.key === r,
                                value: e.name
                            }
                        }
                    ))
                }
            ), [i, r]);
            return i.length <= 1 ? null : o.a.createElement("div", {
                className: a
            }, o.a.createElement("div", {
                className: "font-bliz-light-xxSmall-darkBeige margin-bottom-small align-left"
            }, l("game.status.filters.region.header")), o.a.createElement(ge.a, {
                style: m({
                    large: {
                        minWidth: "200px"
                    }
                }),
                className: fe()("SelectMenu--ghost SelectMenu--flushItems", c({
                    original: "width-full",
                    large: "!width-full SelectMenu--small"
                })),
                items: d,
                onChange: function(e) {
                    var a = Se(e, 1)[0];
                    s(a.key)
                }
            }))
        };
        Ee.propTypes = {
            className: b.a.string
        };
        var Te = Ee;
        function ke(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || function(e, a) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return we(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return we(e, a)
            }(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function we(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        var Ce = function(e) {
            var a = e.className
                , t = X()
                , r = t.categoryFilterSelection
                , i = t.updateCategoryFilterSelection
                , s = t.categories
                , l = Object(_.a)().msg
                , u = Object($.a)()
                , c = u.mediaClassnames
                , m = u.mediaProps
                , d = Object(n.useMemo)((function() {
                    var e = [];
                    return s.forEach((function(a) {
                            e.push({
                                name: a,
                                value: a,
                                key: "category-".concat(a.toLowerCase()),
                                selected: r && r.category === a,
                                category: a
                            })
                        }
                    )),
                        e.unshift({
                            name: l("game.status.filters.locale.all"),
                            value: l("game.status.filters.locale.all"),
                            key: "category-any",
                            selected: void 0 === r || "any" === r.category,
                            category: "any"
                        }),
                        e
                }
            ), [s, r]);
            return o.a.createElement("div", {
                className: a
            }, o.a.createElement("div", {
                className: "font-bliz-light-xxSmall-darkBeige margin-bottom-small align-left"
            }, l("game.status.filters.locale.header")), o.a.createElement(ge.a, {
                style: m({
                    large: {
                        minWidth: "200px"
                    }
                }),
                className: c({
                    original: "width-full SelectMenu--ghost SelectMenu--flushItems",
                    large: "!width-full SelectMenu--small"
                }),
                items: d,
                onChange: function(e) {
                    var a = ke(e, 1)[0];
                    i(a)
                }
            }))
        };
        Ce.propTypes = {
            className: b.a.string
        };
        var Ne = Ce
            , ze = t(187)
            , Ie = function(e) {
            var a = e.className
                , t = Object(n.useContext)(S.a).setPageSearchTerm
                , r = Object(_.a)().msg
                , i = Object($.a)().mediaClassnames;
            return o.a.createElement("div", {
                className: a
            }, o.a.createElement("div", {
                className: "font-bliz-light-xxSmall-darkBeige margin-bottom-small align-left"
            }, r("search.pageTitle")), o.a.createElement(ze.a, {
                className: i({
                    original: "SearchInputField--black",
                    large: "SearchInputField--small"
                }),
                label: r("game.status.table.realm"),
                placeholder: r("game.status.table.realm"),
                onValueChange: t,
                debounce: 250,
                iconWidth: 18,
                iconHeight: 18
            }))
        };
        Ie.propTypes = {
            className: b.a.string
        };
        var Pe = Ie
            , Fe = function() {
            var e = Object($.a)()
                , a = e.mediaIsAtLeastBreakpoint
                , t = e.mediaClassnames
                , r = a("wide")
                , n = a("large")
                , i = r ? de : ye;
            return o.a.createElement("div", {
                className: "margin-bottom-normal"
            }, o.a.createElement("div", {
                className: t({
                    large: "Grid--center flex-items-end margin-bottom-normal",
                    wide: "!Grid--center contain-large padding-bottom-normal",
                    max: "flex flex-justify-space !contain-large !padding-bottom-normal"
                })
            }, o.a.createElement(i, {
                className: t({
                    original: "margin-bottom-normal",
                    large: "!margin-bottom-normal margin-right-normal Grid--center",
                    wide: "margin-bottom-normal !margin-right-normal",
                    max: "!margin-bottom-normal margin-right-norma !Grid--center"
                })
            }), o.a.createElement("div", {
                className: t({
                    large: "flex flex-items-end"
                })
            }, o.a.createElement(Te, {
                className: t({
                    original: "margin-bottom-normal",
                    large: "!margin-bottom-normal margin-right-normal"
                })
            }), o.a.createElement(Ne, {
                className: t({
                    original: "margin-bottom-normal",
                    large: "!margin-bottom-normal margin-right-normal"
                })
            }), r && o.a.createElement(Pe, null))), !r && o.a.createElement("div", {
                className: t({
                    large: "contain-medium"
                })
            }, o.a.createElement(Pe, null)), n && o.a.createElement(ue.a, {
                className: "Divider--opaque Divider--thin margin-top-normal"
            }))
        }
            , Oe = t(19)
            , Ae = function() {
            return o.a.createElement("div", {
                className: "position-relative padding-top-medium padding-bottom-huge margin-top-huge margin-bottom-huge"
            }, o.a.createElement(Q.a, {
                className: "Spinner--donut Spinner--large position-centered"
            }))
        }
            , Ge = function(e) {
            var a = e.isLoading
                , t = e.backgroundImage
                , r = e.header
                , n = e.children
                , i = Object($.a)().mediaClassnames;
            return o.a.createElement(Oe.a, {
                className: "Pane--underSiteNav Pane--bgTop Pane--dirt padding-bottom-huge",
                background: t
            }, o.a.createElement("div", {
                className: i({
                    original: "margin-bottom-medium padding-top-medium",
                    large: "!padding-top-medium padding-top-large",
                    wide: "!padding-top-large padding-top-huge !margin-bottom-medium margin-bottom-large"
                })
            }, r), a ? o.a.createElement(Ae, null) : n)
        };
        Ge.propTypes = {
            header: b.a.object,
            isLoading: b.a.bool,
            backgroundImage: b.a.object
        };
        var je = Ge
            , Ue = function() {
            var e = Object(_.a)()
                , a = e.get
                , t = e.msg
                , r = X()
                , i = r.isLoading
                , s = r.allRegions
                , l = r.activeRegionKey
                , u = r.allGameVersions
                , c = r.activeGameVersionKey
                , m = 0 === s.length
                , d = 0 === u.length
                , p = i && m && d
                , f = u.find((function(e) {
                    return e.key === c
                }
            ))
                , g = s.find((function(e) {
                    return e.key === l
                }
            ))
                , h = g && c ? "".concat(t("game.status.pageTitle"), " - ").concat(g.name, " - ").concat(f.name) : t("game.status.pageTitle");
            return o.a.createElement(q.a, {
                title: h
            }, o.a.createElement(je, {
                isLoading: p,
                backgroundImage: a("game.status.bg"),
                header: Object(n.useMemo)((function() {
                        return o.a.createElement(le, null)
                    }
                ), [])
            }, o.a.createElement(Fe, null), o.a.createElement(ie, null)))
        };
        function We(e, a, t, r, n, o, i) {
            try {
                var s = e[o](i)
                    , l = s.value
            } catch (e) {
                return void t(e)
            }
            s.done ? a(l) : Promise.resolve(l).then(r, n)
        }
        function xe(e) {
            return function() {
                var a = this
                    , t = arguments;
                return new Promise((function(r, n) {
                        var o = e.apply(a, t);
                        function i(e) {
                            We(o, r, n, i, s, "next", e)
                        }
                        function s(e) {
                            We(o, r, n, i, s, "throw", e)
                        }
                        i(void 0)
                    }
                ))
            }
        }
        function Be(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || function(e, a) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Ve(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return Ve(e, a)
            }(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ve(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        var Me = function(e) {
            var a = e.client
                , t = e.region
                , r = e.locale
                , i = Be(Object(n.useState)(""), 2)
                , s = i[0]
                , l = i[1]
                , u = s && s.length && s.length >= 2
                , c = function() {
                var e = xe(regeneratorRuntime.mark((function e(t) {
                        var r, n, o, i, s, l;
                        return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                a.query({
                                                    query: E.a,
                                                    variables: {
                                                        input: {
                                                            compoundRegionGameVersionSlug: t
                                                        }
                                                    },
                                                    errorPolicy: "all"
                                                });
                                        case 2:
                                            return r = e.sent,
                                                n = r.data,
                                                o = r.errors,
                                                i = n.Realms,
                                                s = n.Regions,
                                                l = n.GameVersions,
                                            o && o.map((function(e) {
                                                    console.error(e)
                                                }
                                            )),
                                                e.abrupt("return", {
                                                    realms: i,
                                                    regions: s,
                                                    gameVersions: l,
                                                    errors: o
                                                });
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                return function(a) {
                    return e.apply(this, arguments)
                }
            }()
                , m = function() {
                var e = xe(regeneratorRuntime.mark((function e(t) {
                        var r, n, o, i, s, l, u = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return r = u.length > 1 && void 0 !== u[1] ? u[1] : {},
                                                n = r.forceFetch,
                                                e.next = 4,
                                                a.query({
                                                    query: k.a,
                                                    variables: {
                                                        input: {
                                                            compoundRegionGameVersionSlug: t
                                                        }
                                                    },
                                                    errorPolicy: "all",
                                                    fetchPolicy: n ? "network-only" : "cache-first"
                                                });
                                        case 4:
                                            return o = e.sent,
                                                i = o.data,
                                                s = o.errors,
                                                l = i.Realms,
                                            s && s.map((function(e) {
                                                    console.error(e)
                                                }
                                            )),
                                                e.abrupt("return", {
                                                    realms: l,
                                                    errors: s
                                                });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                return function(a) {
                    return e.apply(this, arguments)
                }
            }();
            return o.a.createElement(K, {
                locale: r,
                compoundRegionGameVersionSlug: t,
                getInitialData: c,
                getRealms: m
            }, o.a.createElement(S.b, {
                value: {
                    searchTerm: u && s,
                    setPageSearchTerm: l
                }
            }, o.a.createElement(Ue, null)))
        };
        Me.propTypes = {
            client: b.a.object.isRequired,
            locale: b.a.number.isRequired,
            region: b.a.string.isRequired
        };
        var De = Object(y.a)(l.d)(Me)
            , Le = t(991);
        f.e.mergeLoc(Le);
        var Ke = function() {
            return o.a.createElement(d.a, null, o.a.createElement(g.a, null, o.a.createElement(h.b, null, o.a.createElement(p.b, null, o.a.createElement(m.d, null, o.a.createElement(De, {
                path: "/:locale/game/status/:region"
            }))))))
        };
        Ke.propTypes = {};
        var _e = Ke
            , qe = t(11)
            , Xe = t(102)
            , Ye = Object(r.hot)(Object(qe.c)((function(e) {
                return o.a.createElement(l.a, {
                    client: Xe.a
                }, o.a.createElement(_e, e))
            }
        )))
            , $e = c()("realm-status-mount")
            , He = $e.mountElem
            , Ze = $e.initialState;
        s.a.render(o.a.createElement(Ye, {
            initialState: Ze
        }), He)
    },
    141: function(e, a, t) {
        "use strict";
        var r = t(0)
            , n = t.n(r)
            , o = t(1)
            , i = t.n(o)
            , s = t(2)
            , l = t.n(s)
            , u = (t(250),
                function(e) {
                    var a = e.className
                        , t = e.children;
                    return n.a.createElement("div", {
                        className: l()("Content", a)
                    }, t)
                }
        );
        u.propTypes = {
            className: i.a.string
        },
            a.a = u
    },
    17: function(e, a, t) {
        "use strict";
        t(154);
        var r = t(0)
            , n = t.n(r)
            , o = t(1)
            , i = t.n(o)
            , s = t(2)
            , l = t.n(s)
            , u = t(104)
            , c = t(101)
            , m = function(e) {
            var a = e.svgName
                , t = Object(r.useRef)(null);
            return Object(r.useEffect)((function() {
                    var e;
                    return e = "".concat(c.a[a], "#").concat(a),
                        t.current.setAttribute("data-src", e),
                        Object(u.a)(t.current, {
                            afterEach: function(e) {
                                e && console.error(e)
                            },
                            beforeEach: function(e) {
                                t.current = e,
                                    e.classList.add("Icon-svg"),
                                    e.setAttribute("data-queryselectoralways-ignore", "")
                            }
                        }),
                        function() {
                            return function() {
                                for (; t.current.lastChild; )
                                    t.current.removeChild(t.current.lastChild)
                            }()
                        }
                }
            ), [a]),
                n.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    viewBox: "0 0 64 64",
                    focusable: "false",
                    ref: t
                })
        };
        m.propTypes = {
            svgName: i.a.string
        },
            m.defaultProps = {
                svgName: null
            };
        var d = m
            , p = function(e) {
            var a = e.svgName
                , t = e.className
                , r = e.iconName
                , o = e.size
                , i = e.width
                , s = e.height
                , u = r || a ? "Icon--".concat(r || a) : ""
                , c = o ? "Icon--".concat(o) : ""
                , m = l()("Icon", t, u, c)
                , p = {};
            return i && s && (p = {
                width: i,
                height: s
            }),
                a ? n.a.createElement("span", {
                    className: l()(m, "Icon--svg"),
                    style: p
                }, n.a.createElement(d, {
                    svgName: a
                })) : n.a.createElement("span", {
                    style: p,
                    className: l()(m, "Icon--image")
                })
        };
        p.propTypes = {
            size: i.a.string,
            svgName: i.a.string,
            iconName: i.a.string,
            className: i.a.string,
            width: i.a.number,
            height: i.a.number
        },
            p.defaultProps = {
                svgName: null
            };
        a.a = p
    },
    187: function(e, a, t) {
        "use strict";
        var r = t(0)
            , n = t.n(r)
            , o = t(1)
            , i = t.n(o)
            , s = t(2)
            , l = t.n(s);
        function u(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || function(e, a) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return c(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return c(e, a)
            }(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function c(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        var m = function(e, a) {
            var t = u(Object(r.useState)(e), 2)
                , n = t[0]
                , o = t[1];
            return Object(r.useEffect)((function() {
                    var t = setTimeout((function() {
                            o(e)
                        }
                    ), a);
                    return function() {
                        clearTimeout(t)
                    }
                }
            ), [e]),
                n
        }
            , d = t(17);
        t(364);
        function p() {
            return (p = Object.assign || function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var r in t)
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }
            ).apply(this, arguments)
        }
        function f(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || function(e, a) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return g(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return g(e, a)
            }(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        var h = function(e) {
            var a = e.placeholder
                , t = e.onValueChange
                , o = e.style
                , i = e.className
                , s = e.label
                , u = e.debounce
                , c = e.iconWidth
                , g = e.iconHeight
                , h = function(e) {
                var a = e.getInputProps
                    , t = e.initialValue
                    , o = e.type
                    , i = f(Object(r.useState)(t), 2)
                    , s = i[0]
                    , l = i[1];
                return [s, n.a.createElement("input", p({}, a(), {
                    value: s || "",
                    onChange: function(e) {
                        return l(e.target.value)
                    },
                    type: o
                }))]
            }({
                initialValue: null,
                type: "text",
                getInputProps: function() {
                    return {
                        autoComplete: "off",
                        className: "SearchInputField-input",
                        "aria-label": s,
                        placeholder: a
                    }
                }
            })
                , v = f(h, 2)
                , b = v[0]
                , y = v[1]
                , S = m(b, u);
            return Object(r.useEffect)((function() {
                    null !== S && t && t(b)
                }
            ), [S]),
                n.a.createElement("div", {
                    className: l()("SearchInputField", i),
                    style: o
                }, n.a.createElement(d.a, {
                    iconName: "searchGold",
                    size: "small",
                    className: "Icon--searchGold SearchInputField-searchIcon",
                    width: c,
                    height: g
                }), y)
        };
        h.propTypes = {
            className: i.a.string,
            placeholder: i.a.string,
            label: i.a.string,
            onValueChange: i.a.func,
            debounce: i.a.number,
            style: i.a.object,
            iconWidth: i.a.number,
            iconHeight: i.a.number
        },
            h.defaultProps = {
                debounce: 0,
                iconWidth: 24,
                iconHeight: 24
            };
        a.a = h
    },
    364: function(e, a, t) {},
    39: function(e, a) {
        e.exports = __WOW_UI_CORE__.default.analytics
    },
    471: function(e, a, t) {},
    500: function(e, a) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetInitialRealmStatusData"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "GetRealmsInput"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "GameVersions"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "key"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "Regions"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "key"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "Realms"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "locale"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "timezone"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "online"
                                },
                                arguments: [],
                                directives: []
                            },{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "players"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "category"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "slug"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "enum"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "population"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "slug"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "enum"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 370
            }
        };
        t.loc.source = {
            body: "query GetInitialRealmStatusData($input: GetRealmsInput!) {\n  GameVersions {\n    name\n    slug\n    key\n  }\n  Regions {\n    name\n    slug\n    key\n  }\n  Realms(input: $input) {\n    name\n    slug\n    locale\n    timezone\n    online\n    category\n    type {\n      id\n      name\n      slug\n      enum\n    }\n    population {\n      id\n      name\n      slug\n      enum\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        function n(e, a) {
            for (var t = 0; t < e.definitions.length; t++) {
                var r = e.definitions[t];
                if (r.name && r.name.value == a)
                    return r
            }
        }
        t.definitions.forEach((function(e) {
                if (e.name) {
                    var a = new Set;
                    !function e(a, t) {
                        if ("FragmentSpread" === a.kind)
                            t.add(a.name.value);
                        else if ("VariableDefinition" === a.kind) {
                            var r = a.type;
                            "NamedType" === r.kind && t.add(r.name.value)
                        }
                        a.selectionSet && a.selectionSet.selections.forEach((function(a) {
                                e(a, t)
                            }
                        )),
                        a.variableDefinitions && a.variableDefinitions.forEach((function(a) {
                                e(a, t)
                            }
                        )),
                        a.definitions && a.definitions.forEach((function(a) {
                                e(a, t)
                            }
                        ))
                    }(e, a),
                        r[e.name.value] = a
                }
            }
        )),
            e.exports = t,
            e.exports.GetInitialRealmStatusData = function(e, a) {
                var t = {
                    kind: e.kind,
                    definitions: [n(e, a)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var o = r[a] || new Set
                    , i = new Set
                    , s = new Set;
                for (o.forEach((function(e) {
                        s.add(e)
                    }
                )); s.size > 0; ) {
                    var l = s;
                    s = new Set,
                        l.forEach((function(e) {
                                i.has(e) || (i.add(e),
                                    (r[e] || new Set).forEach((function(e) {
                                            s.add(e)
                                        }
                                    )))
                            }
                        ))
                }
                return i.forEach((function(a) {
                        var r = n(e, a);
                        r && t.definitions.push(r)
                    }
                )),
                    t
            }(t, "GetInitialRealmStatusData"),
            t.documentId = "9c7cc66367037fda3007b7f592201c2610edb2c9a9292975cd131a37bbe61930"
    },
    501: function(e, a) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetRealmStatusData"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "GetRealmsInput"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "Realms"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "locale"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "timezone"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "online"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "category"
                                },
                                arguments: [],
                                directives: []
                            },{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "players"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "slug"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "enum"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "population"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "slug"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "enum"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 274
            }
        };
        t.loc.source = {
            body: "query GetRealmStatusData($input: GetRealmsInput!) {\n  Realms(input: $input) {\n    name\n    slug\n    locale\n    timezone\n    online\n    category\n    type {\n      id\n      name\n      slug\n      enum\n    }\n    population {\n      id\n      name\n      slug\n      enum\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        function n(e, a) {
            for (var t = 0; t < e.definitions.length; t++) {
                var r = e.definitions[t];
                if (r.name && r.name.value == a)
                    return r
            }
        }
        t.definitions.forEach((function(e) {
                if (e.name) {
                    var a = new Set;
                    !function e(a, t) {
                        if ("FragmentSpread" === a.kind)
                            t.add(a.name.value);
                        else if ("VariableDefinition" === a.kind) {
                            var r = a.type;
                            "NamedType" === r.kind && t.add(r.name.value)
                        }
                        a.selectionSet && a.selectionSet.selections.forEach((function(a) {
                                e(a, t)
                            }
                        )),
                        a.variableDefinitions && a.variableDefinitions.forEach((function(a) {
                                e(a, t)
                            }
                        )),
                        a.definitions && a.definitions.forEach((function(a) {
                                e(a, t)
                            }
                        ))
                    }(e, a),
                        r[e.name.value] = a
                }
            }
        )),
            e.exports = t,
            e.exports.GetRealmStatusData = function(e, a) {
                var t = {
                    kind: e.kind,
                    definitions: [n(e, a)]
                };
                e.hasOwnProperty("loc") && (t.loc = e.loc);
                var o = r[a] || new Set
                    , i = new Set
                    , s = new Set;
                for (o.forEach((function(e) {
                        s.add(e)
                    }
                )); s.size > 0; ) {
                    var l = s;
                    s = new Set,
                        l.forEach((function(e) {
                                i.has(e) || (i.add(e),
                                    (r[e] || new Set).forEach((function(e) {
                                            s.add(e)
                                        }
                                    )))
                            }
                        ))
                }
                return i.forEach((function(a) {
                        var r = n(e, a);
                        r && t.definitions.push(r)
                    }
                )),
                    t
            }(t, "GetRealmStatusData"),
            t.documentId = "c40d282bc48d4d686417f39ba896174eea212d3b86ba8bacd6cdf452b9111554"
    },
    52: function(e, a) {
        e.exports = __WOW_UI_CORE__.default.pageUrl
    },
    53: function(e, a, t) {
        "use strict";
        var r = t(0)
            , n = t.n(r).a.createContext({
            headers: [],
            rows: [],
            shouldRenderColumn: void 0
        });
        a.a = n
    },
    71: function(e, a) {
        e.exports = __WOW_UI_CORE__.default
    },
    80: function(e, a) {
        e.exports = __WOW_UI_CORE__.default.mouse
    },
    83: function(e, a) {
        e.exports = __WOW_UI_CORE__.default.scrollbar
    },
    84: function(e, a, t) {
        "use strict";
        t.d(a, "a", (function() {
                return n
            }
        )),
            t.d(a, "b", (function() {
                    return o
                }
            ));
        var r = t(0)
            , n = Object(r.createContext)({})
            , o = n.Provider;
        n.Consumer
    },
    87: function(e, a, t) {
        "use strict";
        t.d(a, "e", (function() {
                return P
            }
        )),
            t.d(a, "a", (function() {
                    return p
                }
            )),
            t.d(a, "d", (function() {
                    return h
                }
            )),
            t.d(a, "b", (function() {
                    return b
                }
            )),
            t.d(a, "c", (function() {
                    return E
                }
            ));
        var r = t(0)
            , n = t.n(r)
            , o = t(2)
            , i = t.n(o)
            , s = t(1)
            , l = t.n(s)
            , u = t(53)
            , c = function(e) {
            var a = e.className
                , t = e.children;
            return n.a.createElement("div", {
                className: i()("SortTable-head", a)
            }, t)
        };
        c.propTypes = {
            className: l.a.string
        };
        var m = t(36)
            , d = function(e) {
            var a = e.className
                , t = e.children
                , o = Object(r.useContext)(u.a).sortedRows;
            return n.a.createElement("div", {
                className: i()("SortTable-body", a)
            }, Object(m.b)(t, {
                sortedRows: o
            }))
        };
        d.propTypes = {
            className: l.a.string,
            children: l.a.func.isRequired
        };
        var p = d
            , f = t(20)
            , g = function(e) {
            var a = e.className
                , t = e.children
                , o = e.animateRows
                , s = Object(r.useContext)(u.a)
                , l = s.columnIterator
                , c = s.rowIterator
                , d = c.current;
            c.current = c.current + 1,
                l.current = 0;
            var p = Object(f.c)({
                delay: 20 * d,
                from: {
                    opacity: "0",
                    transform: "translate(0, 20px)"
                },
                opacity: "1",
                transform: "translate(0, 0px)"
            });
            return n.a.createElement(f.a.div, {
                style: o && p,
                className: i()("SortTable-row", a)
            }, Object(m.b)(t))
        };
        g.propTypes = {
            className: l.a.string,
            animateRows: l.a.bool
        };
        var h = g
            , v = function(e) {
            var a = e.className
                , t = e.children
                , o = e.item
                , s = Object(r.useContext)(u.a)
                , l = s.alignments
                , c = s.columnIterator
                , m = s.shouldRenderColumn
                , d = c.current;
            c.current = c.current + 1;
            var p = l && l[d] ? "align-".concat(l[d]) : "align-center";
            if (!m(d))
                return null;
            var f = o && o.display ? o.display : o
                , g = "function" == typeof f ? f() : f;
            return n.a.createElement("div", {
                className: i()("SortTable-col SortTable-data", p, a)
            }, t || g)
        };
        v.propTypes = {
            className: l.a.string,
            item: l.a.oneOfType([l.a.string, l.a.number, l.a.object])
        };
        var b = v
            , y = function(e) {
            var a = e.className
                , t = e.children
                , o = e.customComparator
                , s = Object(r.useContext)(u.a)
                , l = s.columnIterator
                , c = s.defaultHeaderClick
                , m = s.setCustomComparator
                , d = s.sortingColumnIndex
                , p = s.isReversed
                , f = s.alignments
                , g = s.shouldRenderColumn
                , h = l.current;
            l.current = l.current + 1;
            var v = f && f[h] ? "align-".concat(f[h]) : "align-center";
            return g(h) ? n.a.createElement("div", {
                className: i()("SortTable-col SortTable-label", {
                    "is-sorted": h === d && !p,
                    "is-sorted-reverse": h === d && p
                }, a)
            }, n.a.createElement("button", {
                className: i()("SortTable-labelOuter", v),
                onClick: function() {
                    m((function() {
                            return o
                        }
                    )),
                        c(h)
                }
            }, n.a.createElement("div", {
                className: "SortTable-labelInner"
            }, n.a.createElement("div", {
                className: "SortTable-labelText"
            }, t)))) : null
        };
        y.propTypes = {
            customComparator: l.a.func,
            className: l.a.string
        };
        var S = y
            , R = function(e) {
            var a = e.className
                , t = Object(r.useContext)(u.a).headers;
            return n.a.createElement("div", {
                className: i()("SortTable-head", a)
            }, t && t.map((function(e) {
                    if ("string" == typeof e)
                        return n.a.createElement(S, {
                            key: "SortTable-header-".concat(e)
                        }, e);
                    var a = e.value
                        , t = e.display
                        , r = e.customComparator;
                    return n.a.createElement(S, {
                        key: "SortTable-header-".concat(a),
                        customComparator: r
                    }, t)
                }
            )))
        };
        R.propTypes = {
            className: l.a.string
        };
        var E = R
            , T = function(e) {
            var a = e.className
                , t = e.animateRows
                , o = Object(r.useContext)(u.a)
                , s = o.sortedRows
                , l = o.headers
                , c = o.isReversed
                , m = o.sortingColumnIndex;
            return n.a.createElement("div", {
                className: i()("SortTable-body", a)
            }, s && s.map && s.map((function(e) {
                    return n.a.createElement(h, {
                        key: "SortTable-row-".concat(e.key, "-").concat(m, "-").concat(c),
                        animateRows: t
                    }, e.cells && e.cells.map((function(a, t) {
                            return n.a.createElement(b, {
                                item: a,
                                key: "SortTable-cell-".concat(e.key, "-").concat(l[t].value)
                            })
                        }
                    )))
                }
            )))
        };
        T.propTypes = {
            className: l.a.string,
            animateRows: l.a.bool
        };
        var k = T;
        t(327);
        function w(e) {
            return function(e) {
                if (Array.isArray(e))
                    return z(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || N(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function C(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || N(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function N(e, a) {
            if (e) {
                if ("string" == typeof e)
                    return z(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name),
                    "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? z(e, a) : void 0
            }
        }
        function z(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        var I = function(e, a, t) {
            var r = e;
            !e || void 0 === e.value && void 0 === e.display || (r = void 0 !== e.value ? e.value : e.display);
            var n = a;
            !a || void 0 === a.value && void 0 === a.display || (n = void 0 !== a.value ? a.value : a.display);
            var o = null;
            return r < n ? o = t ? 1 : -1 : r > n && (o = t ? -1 : 1),
                o
        }
            , P = function(e) {
            var a = e.children
                , t = e.className
                , o = e.headers
                , s = e.initialSortingIndex
                , l = e.alignments
                , c = e.shouldRenderColumn
                , m = e.rows
                , d = C(Object(r.useState)(!1), 2)
                , p = d[0]
                , f = d[1]
                , g = C(Object(r.useState)(m), 2)
                , h = g[0]
                , v = g[1]
                , b = C(Object(r.useState)(s), 2)
                , y = b[0]
                , S = b[1]
                , R = C(Object(r.useState)(null), 2)
                , T = R[0]
                , N = R[1]
                , z = Object(r.useRef)()
                , P = Object(r.useRef)();
            z.current = 0,
                P.current = 0;
            var F = Object(r.useCallback)((function(e, a) {
                    var t = e.cells[y]
                        , r = a.cells[y];
                    return ("function" == typeof T ? T : I)(t, r, p)
                }
            ), [y, p, T]);
            return Object(r.useEffect)((function() {
                    var e = w(m).sort(F);
                    v(e)
                }
            ), [m, F]),
                n.a.createElement(u.a.Provider, {
                    value: {
                        customComparator: T,
                        setCustomComparator: N,
                        isReversed: p,
                        setReversed: f,
                        sortingColumnIndex: y,
                        setSortingColumnIndex: S,
                        alignments: l,
                        shouldRenderColumn: c,
                        headers: o,
                        rowIterator: z,
                        columnIterator: P,
                        defaultHeaderClick: function(e) {
                            y === e ? f(!p) : (S(e),
                                f(!1))
                        },
                        sortedRows: h,
                        setSortedRows: v
                    }
                }, n.a.createElement("div", {
                    className: i()("SortTable", t),
                    "data-queryselectoralways-ignore": !0
                }, a || n.a.createElement(n.a.Fragment, null, n.a.createElement(E, null), n.a.createElement(k, null))))
        };
        P.propTypes = {
            className: l.a.string,
            alignments: l.a.array,
            shouldRenderColumn: l.a.func,
            headers: l.a.array,
            rows: l.a.array,
            initialSortingIndex: l.a.number
        },
            P.defaultProps = {
                alignments: [],
                headers: [],
                rows: [],
                shouldRenderColumn: function() {
                    return !0
                },
                initialSortingIndex: 0
            }
    },
    9: function(e, a) {
        e.exports = __WOW_UI_CORE__.default.querySelectorAlways
    },
    98: function(e, a, t) {
        "use strict";
        var r = t(0)
            , n = t.n(r)
            , o = t(84);
        function i(e, a) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, a) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == t)
                    return;
                var r, n, o = [], i = !0, s = !1;
                try {
                    for (t = t.call(e); !(i = (r = t.next()).done) && (o.push(r.value),
                    !a || o.length !== a); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                        n = e
                } finally {
                    try {
                        i || null == t.return || t.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return o
            }(e, a) || function(e, a) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return s(e, a);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(e);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return s(e, a)
            }(e, a) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e, a) {
            (null == a || a > e.length) && (a = e.length);
            for (var t = 0, r = new Array(a); t < a; t++)
                r[t] = e[t];
            return r
        }
        a.a = function(e) {
            var a = Object(r.useContext)(o.a).searchTerm
                , t = i(Object(r.useState)(e), 2)
                , s = t[0]
                , l = t[1];
            return Object(r.useEffect)((function() {
                    var t = n.a.createElement(n.a.Fragment, null, e);
                    if (e && e.length && a && a.length) {
                        var r = e.toLowerCase()
                            , o = a.toLowerCase()
                            , i = r.indexOf(o);
                        if (i > -1) {
                            var s = e.slice(0, i)
                                , u = e.slice(i, i + a.length)
                                , c = e.slice(i + a.length);
                            t = n.a.createElement(n.a.Fragment, null, s, n.a.createElement("span", {
                                className: "page-search-match"
                            }, u), c)
                        }
                    }
                    l(t)
                }
            ), [a, e]),
                s
        }
    },
    990: function(e, a, t) {
        t(94),
            t(88),
            e.exports = t(1096)
    },
    991: function(e, a) {
        e.exports = {
            "en-US": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'This page lists all available World of Warcraft realms and has information on whether or not a realm is up or down. You can find more information about realm status and scheduled maintenances in the <a href="https://us.forums.blizzard.com/en/wow/c/support/service-status">Service Status Forum</a>. If your realm is listed as down, rest assured that we’re aware of it and working diligently to bring it back online as quickly as possible.'
                            },
                            small: {
                                html: 'This page lists all available World of Warcraft realms and their availability: up or down. You can find more information about realm status in the <a href="https://us.forums.blizzard.com/en/wow/c/support/service-status">Service Status Forum</a>. If your realm is listed as down, rest assured that we’re aware of it and working to bring it back online as quickly as possible.'
                            }
                        },
                        errors: {
                            recoverableError: "No realm data to display. Please try again later."
                        },
                        filters: {
                            locale: {
                                all: "All",
                                header: "Locale"
                            },
                            region: {
                                header: "Region"
                            }
                        },
                        opengraph: {
                            description: "View all available World of Warcraft realms and information about realm status and scheduled maintenances."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Offline"
                            }
                        },
                        table: {
                            battlegroup: "Battlegroup",
                            characters: "Characters",
                            created: "Birthday",
                            friends: "Friends",
                            locale: "Locale",
                            population: "Population",
                            realm: "Realm Name",
                            status: "Status",
                            timezone: "Timezone",
                            players: "Online",
                            type: "Type"
                        },
                        title: "Realm Status"
                    }
                },
                search: {
                    pageTitle: "Search"
                },
                PagedTable: {
                    table: {
                        emptyText: "Sorry, we could not display any data based on the selections made. Please reset your filters and try again."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Germany",
                        "en-GB": "United Kingdom",
                        "en-US": "United States",
                        "es-ES": "Spain",
                        "es-MX": "Mexico",
                        "fr-FR": "France",
                        "it-IT": "Italy",
                        "ko-KR": "Korea",
                        "pt-BR": "Brazil",
                        "pt-PT": "Portugal",
                        "ru-RU": "Russia and CIS",
                        "zh-CN": "China",
                        "zh-TW": "Taiwan"
                    },
                    language: {
                        "de-DE": "German",
                        "en-GB": "English (UK)",
                        "en-US": "English (US)",
                        "es-ES": "Spanish (Castilian)",
                        "es-MX": "Spanish (Latin America)",
                        "fr-FR": "French",
                        "it-IT": "Italian",
                        "ko-KR": "Korean",
                        "pt-BR": "Portuguese (Brazil)",
                        "pt-PT": "Portuguese (Europe)",
                        "ru-RU": "Russian",
                        "zh-CN": "Chinese (Simplified, PRC)",
                        "zh-TW": "Chinese (Traditional, Taiwan)"
                    }
                }
            },
            "de-DE": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'Auf dieser Seite findet ihr eine Liste aller verfügbaren World of Warcraft-Realms sowie den Status dieser Realms. Ein Realm kann entweder als Online (Pfeil nach oben) oder Offline (Pfeil nach unten) markiert sein. Nachrichten zu dem Realmstatus sowie vorgesehenen Wartungen findet ihr auf unserer <a href="https://eu.battle.net/support/de/">Kundendienstseite</a> oder auf <a href="https://twitter.com/blizzardcseu_DE">Twitter</a>. Wir entschuldigen uns vorweg, falls euer Realm als nicht funktionierend gekennzeichnet ist. Die Chancen stehen hoch, dass wir bereits an dem Problem arbeiten und der Realm bald wieder verfügbar sein wird.'
                            },
                            small: {
                                html: 'Auf dieser Seite findet ihr eine Liste aller verfügbaren World of Warcraft-Realms sowie den Status dieser Realms: Online (Pfeil nach oben) oder Offline (Pfeil nach unten). Nachrichten zu dem Realmstatus sowie vorgesehenen Wartungen findet ihr auf unserer <a href="https://eu.battle.net/support/de/">Kundendienstseite</a> oder auf <a href="https://twitter.com/blizzardcseu_DE">Twitter</a>. Wir entschuldigen uns vorweg, falls euer Realm als nicht funktionierend gekennzeichnet ist. Die Chancen stehen hoch, dass wir bereits an dem Problem arbeiten und der Realm bald wieder verfügbar sein wird.'
                            }
                        },
                        errors: {
                            recoverableError: "Keine Realmdaten zum Anzeigen vorhanden. Bitte versucht es später erneut."
                        },
                        filters: {
                            locale: {
                                all: "Alle",
                                header: "Sprache"
                            },
                            region: {
                                header: "Region"
                            }
                        },
                        opengraph: {
                            description: "Hier werden alle verfügbaren Realms von World of Warcraft sowie Realmstatus und geplante Wartungsarbeiten angezeigt."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Offline"
                            }
                        },
                        table: {
                            battlegroup: "Schlachtgruppe",
                            characters: "Charaktere",
                            created: "Erstellt am",
                            friends: "Freunde",
                            locale: "Sprache",
                            population: "Bevölkerung",
                            realm: "Realmname",
                            status: "Status",
                            timezone: "Zeitzone",
                            type: "Typ"
                        },
                        title: "Realmstatus"
                    }
                },
                search: {
                    pageTitle: "Suche"
                },
                PagedTable: {
                    table: {
                        emptyText: "Es wurden keine Daten gefunden, die deinen Angaben entsprechen. Bitte setz deine Filter zurück und versuch es erneut."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Deutschland",
                        "en-GB": "Vereinigtes Königreich",
                        "en-US": "USA",
                        "es-ES": "Spanien",
                        "es-MX": "Mexiko",
                        "fr-FR": "Frankreich",
                        "it-IT": "Italien",
                        "ko-KR": "Südkorea",
                        "pt-BR": "Brasilien",
                        "pt-PT": "Portugal",
                        "ru-RU": "Russland und GUS",
                        "zh-CN": "China",
                        "zh-TW": "Taiwan"
                    },
                    language: {
                        "de-DE": "Deutsch",
                        "en-GB": "English (UK)",
                        "en-US": "Englisch (US)",
                        "es-ES": "Spanisch (Spanien)",
                        "es-MX": "Spanisch (Lateinamerika)",
                        "fr-FR": "Französisch",
                        "it-IT": "Italienisch",
                        "ko-KR": "Koreanisch",
                        "pt-BR": "Portugiesisch (Brasilien)",
                        "pt-PT": "Portugiesisch (Europa)",
                        "ru-RU": "Russisch",
                        "zh-CN": "Chinesisch (vereinfacht, Volksrepublik China)",
                        "zh-TW": "Chinesisch (traditionell, Taiwan)"
                    }
                }
            },
            "es-ES": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'Esta página muestra todos los reinos de World of Warcraft y la información sobre el estado de cada reino. Puedes encontrar más información sobre cada reino en nuestra <a href="https://eu.battle.net/support/es/games/wow">página de asistencia</a> o nuestro <a href="https://twitter.com/BlizzardCSEU_ES">canal de assitencia en Twitter</a> . Si tu reino aparece como desconectado, te garantizamos de que estamos activamente trabajando en ello y lo traeremos de vuelta lo antes posible.'
                            },
                            small: {
                                html: 'Esta página muestra el estado de los reinos de World of Warcraft. Puedes encontrar más información sobre cada reino en nuestro <a href="https://twitter.com/BlizzardCSEU_ES">canal de assitencia en Twitter</a> . Si tu reino aparece como desconectado, te garantizamos de que estamos trabajando en ello y lo traeremos de vuelta lo antes posible.'
                            }
                        },
                        errors: {
                            recoverableError: "No hay datos sobre reinos. Inténtalo más tarde"
                        },
                        filters: {
                            locale: {
                                all: "Todo",
                                header: "Idioma"
                            },
                            region: {
                                header: "Región"
                            }
                        },
                        opengraph: {
                            description: "Consulta todos los reinos disponibles de World of Warcraft y la información sobre su estado y los mantenimientos programados."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Desconectado"
                            }
                        },
                        table: {
                            battlegroup: "Grupo de batalla",
                            characters: "Personajes",
                            created: "Cumpleaños",
                            friends: "Amigos",
                            locale: "Idioma",
                            population: "Población",
                            realm: "Nombre del reino",
                            status: "Estado",
                            timezone: "Zona horaria",
                            type: "Tipo"
                        },
                        title: "Estado de los reinos"
                    }
                },
                search: {
                    pageTitle: "Buscar"
                },
                PagedTable: {
                    table: {
                        emptyText: "No ha sido posible mostrar datos sobre la selección realizada. Reinicia los filtros e inténtalo de nuevo."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Alemania",
                        "en-GB": "Reino Unido",
                        "en-US": "Estados Unidos",
                        "es-ES": "España",
                        "es-MX": "México",
                        "fr-FR": "Francia",
                        "it-IT": "Italia",
                        "ko-KR": "Corea",
                        "pt-BR": "Brasil",
                        "pt-PT": "Portugal",
                        "ru-RU": "Rusia y CEI",
                        "zh-CN": "China",
                        "zh-TW": "Taiwán"
                    },
                    language: {
                        "de-DE": "Alemán",
                        "en-GB": "Inglés (R. U.)",
                        "en-US": "Inglés (EE. UU.)",
                        "es-ES": "Español (España)",
                        "es-MX": "Español (Latinoamérica)",
                        "fr-FR": "Francés",
                        "it-IT": "Italiano",
                        "ko-KR": "Coreano",
                        "pt-BR": "Portugués (Brasil)",
                        "pt-PT": "Portugués (Europa)",
                        "ru-RU": "Ruso",
                        "zh-CN": "Chino (simplificado, RPC)",
                        "zh-TW": "Chino (tradicional, Taiwán)"
                    }
                }
            },
            "fr-FR": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'Cette page affiche la liste de tous les royaumes de World of Warcraft disponibles ainsi que leur état. Les messages concernant l’état des royaumes et leur maintenance seront publiés dans notre <a href="https://eu.battle.net/support/fr/">site d’assistance</a> ou sur notre compte <a href="https://twitter.com/BlizzardCSEU_FR">Twitter</a>. Si votre royaume est indiqué comme étant actuellement hors-ligne, veuillez accepter nos excuses et sachez que nous sommes très probablement déjà en train de travailler à résoudre ce souci le plus rapidement possible.'
                            },
                            small: {
                                html: 'Cette page affiche la liste de tous les royaumes de World of Warcraft disponibles ainsi que leur état. Les messages concernant l’état des royaumes et leur maintenance seront publiés dans notre <a href="https://eu.battle.net/support/fr/">site d’assistance</a>. Si votre royaume est indiqué comme étant actuellement hors-ligne, veuillez accepter nos excuses et sachez que nous sommes très probablement déjà en train de travailler à résoudre ce souci le plus rapidement possible.'
                            }
                        },
                        errors: {
                            recoverableError: "Aucune donnée de royaume à afficher. Veuillez réessayer ultérieurement."
                        },
                        filters: {
                            locale: {
                                all: "Tout",
                                header: "Langue"
                            },
                            region: {
                                header: "Région"
                            }
                        },
                        opengraph: {
                            description: "Voir tous les royaumes de World of Warcraft disponibles, les informations sur le statut des royaumes et les maintenances prévues."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Hors ligne"
                            }
                        },
                        table: {
                            battlegroup: "Corps de bataille",
                            characters: "Personnages",
                            created: "Anniversaire",
                            friends: "Amis",
                            locale: "Langue",
                            population: "Population",
                            realm: "Nom du royaume",
                            status: "État",
                            timezone: "Fuseau horaire",
                            type: "Type"
                        },
                        title: "État des royaumes"
                    }
                },
                search: {
                    pageTitle: "Recherche"
                },
                PagedTable: {
                    table: {
                        emptyText: "Désolé, les critères sélectionnés ne donnent pas de résultats. Veuillez réinitialiser les filtres choisis et recommencer."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Allemagne",
                        "en-GB": "Royaume-Uni",
                        "en-US": "États-Unis d'Amérique",
                        "es-ES": "Espagne",
                        "es-MX": "Mexique",
                        "fr-FR": "France",
                        "it-IT": "Italie",
                        "ko-KR": "Corée",
                        "pt-BR": "Brésil",
                        "pt-PT": "Portugal",
                        "ru-RU": "Russie",
                        "zh-CN": "Chine",
                        "zh-TW": "Taïwan"
                    },
                    language: {
                        "de-DE": "Allemand",
                        "en-GB": "Anglais (Royaume-Uni)",
                        "en-US": "Anglais (États-Unis)",
                        "es-ES": "Espagnol (castillan)",
                        "es-MX": "Espagnol (Amérique latine)",
                        "fr-FR": "Français",
                        "it-IT": "Italien",
                        "ko-KR": "Coréen",
                        "pt-BR": "Portugais (Brésil)",
                        "pt-PT": "Portugais (Europe)",
                        "ru-RU": "Russe",
                        "zh-CN": "Chinois (simplifié, PRC)",
                        "zh-TW": "Chinois (traditionnel, Taïwan)"
                    }
                }
            },
            "it-IT": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'In questa pagina troverai la lista di tutti i reami disponibili su World of Warcraft e lo status di ciascuno di essi. Un reame può essere online oppure offline. Per maggiori informazioni sullo status dei reami, consulta <a href="https://twitter.com/blizzardcseu_it ">il nostro account Twitter</a> o il <a href="https://eu.battle.net/support/it/">sito di assistenza</a>. Se il tuo reame è offline stai sicuro che stiamo lavorando alacremente per riportarlo online il più velocemente possibile.'
                            },
                            small: {
                                html: 'In questa pagina troverai la lista di tutti i reami disponibili su World of Warcraft e lo status di ciascuno di essi. Un reame può essere online oppure offline. Per maggiori informazioni sullo status dei reami, consulta <a href="https://twitter.com/blizzardcseu_it ">il nostro account Twitter</a> o il <a href="https://eu.battle.net/support/it/ ">sito di assistenza</a>. Se il tuo reame è offline stai sicuro che stiamo lavorando alacremente per riportarlo online il più velocemente possibile.'
                            }
                        },
                        errors: {
                            recoverableError: "Nessun dato sul reame da mostrare. Riprova più tardi."
                        },
                        filters: {
                            locale: {
                                all: "Tutti",
                                header: "Lingua"
                            },
                            region: {
                                header: "Regione"
                            }
                        },
                        opengraph: {
                            description: "Guarda tutti i reami di World of Warcraft disponibili e le informazioni sullo stato del reame e i periodi di manutenzione programmata."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Offfline"
                            }
                        },
                        table: {
                            battlegroup: "Battlegroup",
                            characters: "Personaggi",
                            created: "Compleanno",
                            friends: "Amici",
                            locale: "Lingua",
                            population: "Popolazione",
                            realm: "Nome del reame",
                            status: "Status",
                            timezone: "Fuso orario",
                            type: "Tipo"
                        },
                        title: "Status del reame"
                    }
                },
                search: {
                    pageTitle: "Ricerca"
                },
                PagedTable: {
                    table: {
                        emptyText: "Spiacenti, non è possibile mostrare alcun dato in base alle selezioni effettuate. Reimposta i filtri e riprova."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Germania",
                        "en-GB": "Regno Unito",
                        "en-US": "Stati Uniti",
                        "es-ES": "Spagna",
                        "es-MX": "Messico",
                        "fr-FR": "Francia",
                        "it-IT": "Italia",
                        "ko-KR": "Corea",
                        "pt-BR": "Brasile",
                        "pt-PT": "Portogallo",
                        "ru-RU": "Russia e CSI",
                        "zh-CN": "Cina",
                        "zh-TW": "Taiwan"
                    },
                    language: {
                        "de-DE": "Tedesco",
                        "en-GB": "Inglese (Regno Unito)",
                        "en-US": "Inglese (US)",
                        "es-ES": "Spagnolo (Castigliano)",
                        "es-MX": "Spagnolo (America Latina)",
                        "fr-FR": "Francese",
                        "it-IT": "Italiano",
                        "ko-KR": "Coreano",
                        "pt-BR": "Portoghese (Brasile)",
                        "pt-PT": "Portoghese (Europa)",
                        "ru-RU": "Russo",
                        "zh-CN": "Cinese (Semplificato, RPC)",
                        "zh-TW": "Cinese (Tradizionale, Taiwan)"
                    }
                }
            },
            "pl-PL": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'This page lists all available World of Warcraft realms and has information on whether or not a realm is up or down. You can find more information about realm status and scheduled maintenances in the <a href="https://us.forums.blizzard.com/en/wow/c/support/service-status">Service Status Forum</a>. If your realm is listed as down, rest assured that we’re aware of it and working diligently to bring it back online as quickly as possible.'
                            },
                            small: {
                                html: 'This page lists all available World of Warcraft realms and their availability: up or down. You can find more information about realm status in the <a href="https://us.forums.blizzard.com/en/wow/c/support/service-status">Service Status Forum</a>. If your realm is listed as down, rest assured that we’re aware of it and working to bring it back online as quickly as possible.'
                            }
                        },
                        errors: {
                            recoverableError: "No realm data to display. Please try again later."
                        },
                        filters: {
                            locale: {
                                all: "All",
                                header: "Locale"
                            },
                            region: {
                                header: "Region"
                            }
                        },
                        opengraph: {
                            description: "View all available World of Warcraft realms and information about realm status and scheduled maintenances."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Offline"
                            }
                        },
                        table: {
                            battlegroup: "Battlegroup",
                            characters: "Characters",
                            created: "Birthday",
                            friends: "Friends",
                            locale: "Locale",
                            population: "Population",
                            realm: "Realm Name",
                            status: "Status",
                            timezone: "Timezone",
                            type: "Type"
                        },
                        title: "Realm Status"
                    }
                },
                search: {
                    pageTitle: "Search"
                },
                PagedTable: {
                    table: {
                        emptyText: "Sorry, we could not display any data based on the selections made. Please reset your filters and try again."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Germany",
                        "en-GB": "United Kingdom",
                        "en-US": "United States",
                        "es-ES": "Spain",
                        "es-MX": "Mexico",
                        "fr-FR": "France",
                        "it-IT": "Italy",
                        "ko-KR": "Korea",
                        "pt-BR": "Brazil",
                        "pt-PT": "Portugal",
                        "ru-RU": "Russia and CIS",
                        "zh-CN": "China",
                        "zh-TW": "Taiwan"
                    },
                    language: {
                        "de-DE": "German",
                        "en-GB": "English (UK)",
                        "en-US": "English (US)",
                        "es-ES": "Spanish (Castilian)",
                        "es-MX": "Spanish (Latin America)",
                        "fr-FR": "French",
                        "it-IT": "Italian",
                        "ko-KR": "Korean",
                        "pt-BR": "Portuguese (Brazil)",
                        "pt-PT": "Portuguese (Europe)",
                        "ru-RU": "Russian",
                        "zh-CN": "Chinese (Simplified, PRC)",
                        "zh-TW": "Chinese (Traditional, Taiwan)"
                    }
                }
            },
            "ru-RU": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'На этой странице перечислены все игровые миры World of Warcraft с указанием, какой мир в данный момент открыт, а какой закрыт. О текущем состоянии игровых миров и предстоящем техобслуживании сообщается на <a href="https://eu.forums.blizzard.com/ru/wow/categories">форуме</a>. Если ваш игровой мир сейчас закрыт, будьте уверены: мы об этом знаем и делаем все возможное, чтобы поскорее его открыть.'
                            },
                            small: {
                                html: 'На этой странице перечислены все игровые миры World of Warcraft с указанием, какой мир открыт или закрыт. О текущем состоянии игровых миров и  техобслуживании сообщается на <a href="https://eu.forums.blizzard.com/ru/wow/categories">форуме</a>. Если ваш игровой мир сейчас закрыт, будьте уверены: мы об этом знаем и делаем все возможное, чтобы поскорее его открыть.'
                            }
                        },
                        errors: {
                            recoverableError: "Невозможно отобразить данные игрового мира. Попробуйте позже."
                        },
                        filters: {
                            locale: {
                                all: "Все",
                                header: "Страна"
                            },
                            region: {
                                header: "Регион"
                            }
                        },
                        opengraph: {
                            description: "Посмотреть все доступные игровые миры World of Warcraft, а также сведения об их статусе и запланированном техобслуживании."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Закрыт"
                            }
                        },
                        table: {
                            battlegroup: "Боевая группа",
                            characters: "Персонажи",
                            created: "День рождения",
                            friends: "Друзья",
                            locale: "Страна",
                            population: "Заселенность",
                            realm: "Название мира",
                            status: "Состояние",
                            timezone: "Часовой пояс",
                            type: "Тип",
                            players: "Онлайн",
                        },
                        title: "Состояние игрового мира"
                    }
                },
                search: {
                    pageTitle: "Поиск"
                },
                PagedTable: {
                    table: {
                        emptyText: "Извините, но ваш запрос не позволяет отобразить никакую информацию. Просим обновить фильтры и повторить попытку."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Германия",
                        "en-GB": "Великобритания",
                        "en-US": "США",
                        "es-ES": "Испания",
                        "es-MX": "Мексика",
                        "fr-FR": "Франция",
                        "it-IT": "Италия",
                        "ko-KR": "Корея",
                        "pt-BR": "Бразилия",
                        "pt-PT": "Португалия",
                        "ru-RU": "Россия и СНГ",
                        "zh-CN": "Китай",
                        "zh-TW": "Тайвань"
                    },
                    language: {
                        "de-DE": "Немецкий",
                        "en-GB": "Английский (Великобритания)",
                        "en-US": "Английский (США)",
                        "es-ES": "Испанский (кастильский)",
                        "es-MX": "Испанский (Латинская Америка)",
                        "fr-FR": "Французский",
                        "it-IT": "Итальянский",
                        "ko-KR": "Корейский",
                        "pt-BR": "Португальский (бразильский)",
                        "pt-PT": "Португальский (Европа)",
                        "ru-RU": "Русский",
                        "zh-CN": "Китайский (упрощенное письмо)",
                        "zh-TW": "Китайский (традиционное письмо)"
                    }
                }
            },
            "es-MX": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'Esta página muestra todos los reinos de World of Warcraft y su disponibilidad: en línea o fuera de línea. Puedes encontrar más información sobre el estado de los reinos en el <a href="https://us.forums.blizzard.com/es/wow/c/soporte/estatus-del-servicio">Foro de estatus del servicio</a>. Si tu reino está listado como fuera de línea, ten la seguridad que estamos al tanto y estamos trabajando diligentemente para reactivarlo a la brevedad.'
                            },
                            small: {
                                html: 'Esta página muestra todos los reinos de World of Warcraft y su disponibilidad: en línea o fuera de línea. Puedes encontrar más información sobre el estado de los reinos en el <a href="https://us.forums.blizzard.com/es/wow/c/soporte/estatus-del-servicio">Foro de estatus del servicio</a>. Si tu reino está listado como fuera de línea, ten la seguridad que estamos al tanto y estamos trabajando diligentemente para reactivarlo a la brevedad.'
                            }
                        },
                        errors: {
                            recoverableError: "No hay datos del reino para mostrar. Inténtalo más tarde."
                        },
                        filters: {
                            locale: {
                                all: "Todo",
                                header: "Localidad"
                            },
                            region: {
                                header: "REGIÓN"
                            }
                        },
                        opengraph: {
                            description: "Mira todos los reinos disponibles de World of Warcraft y accede a información sobre el estado de cada reino y las etapas de mantenimiento programadas."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Fuera de línea"
                            }
                        },
                        table: {
                            battlegroup: "Grupo de batalla",
                            characters: "Personajes",
                            created: "Cumpleaños",
                            friends: "Amigos",
                            locale: "Localidad",
                            population: "Población",
                            realm: "Nombre del reino",
                            status: "Estado",
                            timezone: "Zona horaria",
                            type: "Tipo"
                        },
                        title: "Estado de los reinos"
                    }
                },
                search: {
                    pageTitle: "Buscar"
                },
                PagedTable: {
                    table: {
                        emptyText: "No se encuentra información que coincida con los parámetros seleccionados. Restablece los filtros e inténtalo de nuevo."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Alemania",
                        "en-GB": "Reino Unido",
                        "en-US": "Estados Unidos",
                        "es-ES": "España",
                        "es-MX": "México",
                        "fr-FR": "Francia",
                        "it-IT": "Italia",
                        "ko-KR": "Corea del Sur",
                        "pt-BR": "Brasil",
                        "pt-PT": "Portugal",
                        "ru-RU": "Rusia y CEI",
                        "zh-CN": "China",
                        "zh-TW": "Taiwán"
                    },
                    language: {
                        "de-DE": "Alemán",
                        "en-GB": "Inglés británico",
                        "en-US": "Inglés (EEUU)",
                        "es-ES": "Español (España)",
                        "es-MX": "Español (Latino)",
                        "fr-FR": "Francés",
                        "it-IT": "Italiano",
                        "ko-KR": "Coreano",
                        "pt-BR": "Portugués (Brasil)",
                        "pt-PT": "Portugués (Europa)",
                        "ru-RU": "Ruso",
                        "zh-CN": "Chino (CN)",
                        "zh-TW": "Chino (TW)"
                    }
                }
            },
            "ko-KR": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: '이 페이지에서는 월드 오브 워크래프트에서 이용할 수 있는 모든 서버 목록과 정보를 확인할 수 있습니다. 서버 현황과 점검 일정 등 자세한 정보는 <a href="https://kr.forums.blizzard.com/ko/wow/c/support/service-status">서비스 현황 토론장</a>에서 확인하세요. 만약 현재 이용 중인 서버가 점검 중이라면, 조금만 기다려주세요.'
                            },
                            small: {
                                html: '이 페이지에서는 월드 오브 워크래프트에서 이용할 수 있는 모든 서버 목록과 정보를 확인할 수 있습니다. 서버 현황과 점검 일정 등 자세한 정보는 <a href="https://kr.forums.blizzard.com/ko/wow/c/support/service-status">서비스 현황 토론장</a>에서 확인하세요. 만약 현재 이용 중인 서버가 점검 중이라면, 조금만 기다려주세요.'
                            }
                        },
                        errors: {
                            recoverableError: "표시할 서버 정보가 없습니다. 잠시 후 다시 시도해주세요."
                        },
                        filters: {
                            locale: {
                                all: "모두",
                                header: "지역"
                            },
                            region: {
                                header: "지역"
                            }
                        },
                        opengraph: {
                            description: "접속 가능한 월드 오브 워크래프트 서버, 서버 상태 관련 정보, 예정된 서비스 점검 기간 모두 보기"
                        },
                        pageTitle: "서버 현황",
                        realm: {
                            population: {
                                offline: "오프라인"
                            }
                        },
                        table: {
                            battlegroup: "전투군",
                            characters: "캐릭터",
                            created: "생일",
                            friends: "친구",
                            locale: "지역",
                            population: "접속자 수",
                            realm: "서버 이름",
                            status: "상태",
                            timezone: "표준 시간대",
                            type: "유형"
                        },
                        title: "서버 현황"
                    }
                },
                search: {
                    pageTitle: "검색"
                },
                PagedTable: {
                    table: {
                        emptyText: "선택 사항에 해당하는 데이터가 없습니다. 필터를 재설정하고 다시 시도해주세요."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "독일",
                        "en-GB": "영국",
                        "en-US": "미국",
                        "es-ES": "스페인",
                        "es-MX": "멕시코",
                        "fr-FR": "프랑스",
                        "it-IT": "이탈리아",
                        "ko-KR": "대한민국",
                        "pt-BR": "브라질",
                        "pt-PT": "포르투갈",
                        "ru-RU": "러시아 및 독립 국가 연합",
                        "zh-CN": "중국",
                        "zh-TW": "대만"
                    },
                    language: {
                        "de-DE": "독일어",
                        "en-GB": "영어 (영국)",
                        "en-US": "영어 (미국)",
                        "es-ES": "스페인어 (카스티야)",
                        "es-MX": "스페인어 (라틴 아메리카)",
                        "fr-FR": "프랑스어",
                        "it-IT": "이탈리아어",
                        "ko-KR": "한국어",
                        "pt-BR": "포르투갈어 (브라질)",
                        "pt-PT": "포르투갈어 (유럽)",
                        "ru-RU": "러시아어",
                        "zh-CN": "중국어(간체)",
                        "zh-TW": "중국어(번체)"
                    }
                }
            },
            "pt-BR": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'Esta página lista todos os reinos de World of Warcraft disponíveis e traz informações sobre se o reino está no ar ou fora do ar. Você pode obter mais informações sobre status dos reinos e manutenções programadas no <a href="https://us.forums.blizzard.com/pt/wow/c/suporte/estado-do-servico">Fórum de Estado do Serviço</a>. Se o seu reino estiver listado como fora do ar, fique tranquilo, pois estamos cientes disso e trabalhando para que ele volte ao ar o mais rápido possível.'
                            },
                            small: {
                                html: 'Esta página lista todos os reinos de World of Warcraft disponíveis e sua disponibilidade: no ar ou fora do ar. Você pode obter mais informações sobre status dos reinos no <a href="https://us.forums.blizzard.com/pt/wow/c/suporte/estado-do-servico">Fórum de Estado do Serviço</a>. Se o seu reino estiver listado como fora do ar, fique tranquilo, pois estamos cientes disso e trabalhando para que ele volte ao ar o mais rápido possível.'
                            }
                        },
                        errors: {
                            recoverableError: "Nenhum dado de reino a ser exibido. Tente mais tarde."
                        },
                        filters: {
                            locale: {
                                all: "Todos",
                                header: "Local"
                            },
                            region: {
                                header: "Região"
                            }
                        },
                        opengraph: {
                            description: "Confira todos os reinos de World of Warcraft disponíveis e informe-se sobre a situação dos reinos e as manutenções programadas."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Desconectado"
                            }
                        },
                        table: {
                            battlegroup: "Grupo de batalha",
                            characters: "Personagens",
                            created: "Data de nascimento",
                            friends: "Amigos",
                            locale: "Local",
                            population: "População",
                            realm: "Nome do reino",
                            status: "Status",
                            timezone: "Fuso horário",
                            type: "Tipo"
                        },
                        title: "Status do Reino"
                    }
                },
                search: {
                    pageTitle: "Procurar"
                },
                PagedTable: {
                    table: {
                        emptyText: "Infelizmente não foi possível exibir dados com base nas opções selecionadas. Tire os filtros e tente de novo."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Alemanha",
                        "en-GB": "Reino Unido",
                        "en-US": "Estados Unidos",
                        "es-ES": "Espanha",
                        "es-MX": "México",
                        "fr-FR": "França",
                        "it-IT": "Itália",
                        "ko-KR": "Coreia",
                        "pt-BR": "Brasil",
                        "pt-PT": "Portugal",
                        "ru-RU": "Rússia",
                        "zh-CN": "China",
                        "zh-TW": "Taiwan"
                    },
                    language: {
                        "de-DE": "Alemão",
                        "en-GB": "Inglês (UE)",
                        "en-US": "Inglês (EUA)",
                        "es-ES": "Espanhol (Castelhano)",
                        "es-MX": "Espanhol (América Latina)",
                        "fr-FR": "Francês",
                        "it-IT": "Italiano",
                        "ko-KR": "Coreano",
                        "pt-BR": "Português (Brasil)",
                        "pt-PT": "Português (Europeu)",
                        "ru-RU": "Russo",
                        "zh-CN": "Chinês (CN)",
                        "zh-TW": "Chinês (TW)"
                    }
                }
            },
            "zh-CN": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "https://cms.cnc.blzstatic.cn/cms/template_resource/WEA51EMAXNFB1474350114687.jpg"
                        },
                        desc: {
                            large: {
                                html: '本页面列出所有可用的魔兽世界服务器以及每个服务器的状态。一个服务器可以显示为“开机”或“停机”。与服务器状态和计划维护相关的消息将发布在<a href = "http://bbs.wow.blizzard.cn/forum.php">服务状态论坛</a>中。如果您的服务器显示为停机，让我们提前道歉。可能我们正在努力，尽快让它返回在线状态。'
                            },
                            small: {
                                html: '本页面列出所有可用的魔兽世界服务器以及每个服务器的开停机状态。服务器状态的相关消息将发布在<a href = "http://bbs.wow.blizzard.cn/forum.php">服务状态论坛</a>中。如果您的服务器显示为停机，让我们提前道歉。可能我们正在努力，尽快让它返回在线状态。'
                            }
                        },
                        errors: {
                            recoverableError: "暂时无法显示服务器数据，请稍候重试。"
                        },
                        filters: {
                            locale: {
                                all: "所有",
                                header: "区域"
                            },
                            region: {
                                header: "地区"
                            }
                        },
                        opengraph: {
                            description: "查看《魔兽世界》所有可用服务器，服务器状态与维护安排相关信息。"
                        },
                        pageTitle: "服务器状态",
                        realm: {
                            population: {
                                offline: "停机"
                            }
                        },
                        table: {
                            battlegroup: "战斗组",
                            characters: "角色",
                            created: "生日",
                            friends: "好友",
                            locale: "区域",
                            population: "服务器负载",
                            realm: "服务器名称",
                            status: "状态",
                            timezone: "时区",
                            type: "类型"
                        },
                        title: "服务器状态"
                    }
                },
                search: {
                    pageTitle: "搜索"
                },
                PagedTable: {
                    table: {
                        emptyText: "抱歉，该选择下无法显示任何数据。请重置筛选条件后重新尝试。"
                    }
                },
                locale: {
                    country: {
                        "de-DE": "德国",
                        "en-GB": "英国",
                        "en-US": "美国",
                        "es-ES": "西班牙",
                        "es-MX": "墨西哥",
                        "fr-FR": "法国",
                        "it-IT": "意大利",
                        "ko-KR": "韩国",
                        "pt-BR": "巴西",
                        "pt-PT": "葡萄牙",
                        "ru-RU": "俄罗斯和独立国家联合体",
                        "zh-CN": "中国",
                        "zh-TW": "中国台湾"
                    },
                    language: {
                        "de-DE": "德语",
                        "en-GB": "英语（英国）",
                        "en-US": "英语（美国）",
                        "es-ES": "西班牙语（西班牙）",
                        "es-MX": "西班牙语（拉丁美洲）",
                        "fr-FR": "法语",
                        "it-IT": "意大利语",
                        "ko-KR": "韩语",
                        "pt-BR": "葡萄牙语（巴西）",
                        "pt-PT": "葡萄牙语（欧洲）",
                        "ru-RU": "俄语",
                        "zh-CN": "中文（简体）",
                        "zh-TW": "中文（繁体）"
                    }
                }
            },
            "zh-TW": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: '這裡列出所有《魔獸世界》伺服器和其狀態。一個伺服器可被列為正常或維護中狀態。伺服器相關訊息或例行維護將公布於<a href="https://tw.forums.blizzard.com/zh/wow/c/customer-support/service-status">服務狀態討論區</a>。若您的伺服器目前在維護狀態，在此我們先向您致歉。我們目前正積極處理中並儘快恢復其正常狀態。'
                            },
                            small: {
                                html: '這裡列出所有《魔獸世界》伺服器和其狀態。一個伺服器可被列為正常或維護中狀態。伺服器相關訊息或例行維護將公布於<a href="https://tw.forums.blizzard.com/zh/wow/c/customer-support/service-status">服務狀態討論區</a>。若您的伺服器目前在維護狀態，在此我們先向您致歉。我們目前正積極處理中並儘快恢復其正常狀態。'
                            }
                        },
                        errors: {
                            recoverableError: "無伺服器資料。 請稍後再試。"
                        },
                        filters: {
                            locale: {
                                all: "全部",
                                header: "地區"
                            },
                            region: {
                                header: "地區"
                            }
                        },
                        opengraph: {
                            description: "檢視所有開放的《魔獸世界》伺服器，以及伺服器相關訊息或例行維護時間。"
                        },
                        pageTitle: "伺服器狀態",
                        realm: {
                            population: {
                                offline: "離線"
                            }
                        },
                        table: {
                            battlegroup: "戰場群組",
                            characters: "角色",
                            created: "生日",
                            friends: "朋友",
                            locale: "地區",
                            population: "伺服器負載",
                            realm: "伺服器名稱",
                            status: "狀態",
                            timezone: "時區",
                            type: "類別"
                        },
                        title: "伺服器狀態"
                    }
                },
                search: {
                    pageTitle: "搜尋"
                },
                PagedTable: {
                    table: {
                        emptyText: "很抱歉，您的條件篩選沒有任何資料。 請重置您的過濾器，然後重試。"
                    }
                },
                locale: {
                    country: {
                        "de-DE": "德國",
                        "en-GB": "英國",
                        "en-US": "美國",
                        "es-ES": "西班牙",
                        "es-MX": "墨西哥",
                        "fr-FR": "法國",
                        "it-IT": "義大利",
                        "ko-KR": "韓國",
                        "pt-BR": "巴西",
                        "pt-PT": "葡萄牙",
                        "ru-RU": "俄羅斯和獨立國協（CIS）",
                        "zh-CN": "中國",
                        "zh-TW": "台灣"
                    },
                    language: {
                        "de-DE": "德國",
                        "en-GB": "英文（英國）",
                        "en-US": "英文（美國）",
                        "es-ES": "西班牙文（西班牙）",
                        "es-MX": "西班牙文（拉丁美洲）",
                        "fr-FR": "法文",
                        "it-IT": "義大利文",
                        "ko-KR": "韓文",
                        "pt-BR": "葡萄牙文（巴西）",
                        "pt-PT": "葡萄牙文（歐洲）",
                        "ru-RU": "俄文",
                        "zh-CN": "中文（簡體，中國）",
                        "zh-TW": "中文（繁體，台灣）"
                    }
                }
            },
            "en-GB": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'This page lists all available World of Warcraft realms and has information on whether or not a realm is up or down. You can find more information about realm status and scheduled maintenances in our <a href="https://eu.battle.net/support/en/games/wow">Support Page</a> or on <a href="https://twitter.com/BlizzardCSEU_EN">Twitter</a>. If your realm is listed as down, rest assured that we’re aware of it and working diligently to bring it back online as quickly as possible.'
                            },
                            small: {
                                html: 'This page lists all available World of Warcraft realms and their availability: up or down. You can find more information about realm status in our <a href="https://eu.battle.net/support/en/games/wow">Support Page</a> or on <a href="https://twitter.com/BlizzardCSEU_EN">Twitter</a>. If your realm is listed as down, rest assured that we’re aware of it and working to bring it back online as quickly as possible.'
                            }
                        },
                        errors: {
                            recoverableError: "No realm data to display. Please try again later."
                        },
                        filters: {
                            locale: {
                                all: "All",
                                header: "Locale"
                            },
                            region: {
                                header: "Region"
                            }
                        },
                        opengraph: {
                            description: "View all available World of Warcraft realms and information about realm status and scheduled maintenances."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Offline"
                            }
                        },
                        table: {
                            battlegroup: "Battlegroup",
                            characters: "Characters",
                            created: "Birthday",
                            friends: "Friends",
                            locale: "Locale",
                            population: "Population",
                            realm: "Realm Name",
                            status: "Status",
                            timezone: "Timezone",
                            type: "Type"
                        },
                        title: "Realm Status"
                    }
                },
                search: {
                    pageTitle: "Search"
                },
                PagedTable: {
                    table: {
                        emptyText: "Sorry, we could not display any data based on the selections made. Please reset your filters and try again."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Germany",
                        "en-GB": "United Kingdom",
                        "en-US": "United States",
                        "es-ES": "Spain",
                        "es-MX": "Mexico",
                        "fr-FR": "France",
                        "it-IT": "Italy",
                        "ko-KR": "Korea",
                        "pt-BR": "Brazil",
                        "pt-PT": "Portugal",
                        "ru-RU": "Russia and CIS",
                        "zh-CN": "China",
                        "zh-TW": "Taiwan"
                    },
                    language: {
                        "de-DE": "German",
                        "en-GB": "English (UK)",
                        "en-US": "English (US)",
                        "es-ES": "Spanish (Castilian)",
                        "es-MX": "Spanish (Latin America)",
                        "fr-FR": "French",
                        "it-IT": "Italian",
                        "ko-KR": "Korean",
                        "pt-BR": "Portuguese (Brazil)",
                        "pt-PT": "Portuguese (Europe)",
                        "ru-RU": "Russian",
                        "zh-CN": "Chinese (Simplified, PRC)",
                        "zh-TW": "Chinese (Traditional, Taiwan)"
                    }
                }
            },
            "pt-PT": {
                game: {
                    status: {
                        bg: {
                            color: "#090c1d",
                            url: "//bnetcmsus-a.akamaihd.net/cms/template_resource/90/90GADAMBLMYV1466177710309.jpg"
                        },
                        desc: {
                            large: {
                                html: 'Esta página lista todos os reinos de World of Warcraft disponíveis e traz informações sobre se o reino está no ar ou fora do ar. Você pode obter mais informações sobre status dos reinos e manutenções programadas no <a href="https://us.forums.blizzard.com/pt/wow/c/suporte/estado-do-servico">Fórum de Estado do Serviço</a>. Se o seu reino estiver listado como fora do ar, fique tranquilo, pois estamos cientes disso e trabalhando para que ele volte ao ar o mais rápido possível.'
                            },
                            small: {
                                html: 'Esta página lista todos os reinos de World of Warcraft disponíveis e sua disponibilidade: no ar ou fora do ar. Você pode obter mais informações sobre status dos reinos no <a href="https://us.forums.blizzard.com/pt/wow/c/suporte/estado-do-servico">Fórum de Estado do Serviço</a>. Se o seu reino estiver listado como fora do ar, fique tranquilo, pois estamos cientes disso e trabalhando para que ele volte ao ar o mais rápido possível.'
                            }
                        },
                        errors: {
                            recoverableError: "Nenhum dado de reino a ser exibido. Tente mais tarde."
                        },
                        filters: {
                            locale: {
                                all: "Todos",
                                header: "Local"
                            },
                            region: {
                                header: "Região"
                            }
                        },
                        opengraph: {
                            description: "Confira todos os reinos de World of Warcraft disponíveis e informe-se sobre a situação dos reinos e as manutenções programadas."
                        },
                        pageTitle: "Realm Status",
                        realm: {
                            population: {
                                offline: "Desconectado"
                            }
                        },
                        table: {
                            battlegroup: "Grupo de batalha",
                            characters: "Personagens",
                            created: "Data de nascimento",
                            friends: "Amigos",
                            locale: "Local",
                            population: "População",
                            realm: "Nome do reino",
                            status: "Status",
                            timezone: "Fuso horário",
                            type: "Tipo"
                        },
                        title: "Status do Reino"
                    }
                },
                search: {
                    pageTitle: "Procurar"
                },
                PagedTable: {
                    table: {
                        emptyText: "Infelizmente não foi possível exibir dados com base nas opções selecionadas. Tire os filtros e tente de novo."
                    }
                },
                locale: {
                    country: {
                        "de-DE": "Alemanha",
                        "en-GB": "Reino Unido",
                        "en-US": "Estados Unidos",
                        "es-ES": "Espanha",
                        "es-MX": "México",
                        "fr-FR": "França",
                        "it-IT": "Itália",
                        "ko-KR": "Coreia",
                        "pt-BR": "Brasil",
                        "pt-PT": "Portugal",
                        "ru-RU": "Rússia",
                        "zh-CN": "China",
                        "zh-TW": "Taiwan"
                    },
                    language: {
                        "de-DE": "Alemão",
                        "en-GB": "Inglês (UE)",
                        "en-US": "Inglês (EUA)",
                        "es-ES": "Espanhol (Castelhano)",
                        "es-MX": "Espanhol (América Latina)",
                        "fr-FR": "Francês",
                        "it-IT": "Italiano",
                        "ko-KR": "Coreano",
                        "pt-BR": "Português (Brasil)",
                        "pt-PT": "Português (Europeu)",
                        "ru-RU": "Russo",
                        "zh-CN": "Chinês (CN)",
                        "zh-TW": "Chinês (TW)"
                    }
                }
            }
        }
    }
}, [[990, 2, 0, 1, 3, 4, 6, 10]]]);
