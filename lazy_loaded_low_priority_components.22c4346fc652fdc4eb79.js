/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2790], {
        340639: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ORDER_SIGNAL_TYPE = void 0;
            const a = Object.freeze({
                CREATED: 0,
                UPDATED: 1
            });
            t.ORDER_SIGNAL_TYPE = a
        },
        94153: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ORDER_STATUS = void 0;
            const a = Object.freeze({
                PROCESSING: 0,
                SHIPPED: 1,
                COMPLETED: 2,
                CANCELLED: 3,
                PENDING: 4,
                PARTIALLY_SHIPPED: 5
            });
            t.ORDER_STATUS = a
        },
        773693: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT = void 0;
            const a = Object.freeze({
                ENTRY_POINT_ORDER_SCREEN: 0,
                ENTRY_POINT_SETTINGS_SCREEN: 1,
                ENTRY_POINT_LABELS_SCREEN: 2
            });
            t.SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT = a
        },
        628264: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CtwaOrderSignalWamEvent = void 0;
            var r = a(901032),
                n = a(340639),
                l = a(94153);
            const {
                BOOLEAN: o,
                INTEGER: i,
                STRING: u
            } = r.TYPES, d = (0, r.defineEvents)({
                CtwaOrderSignal: [4264, {
                        ctwaOrderSignalVersion: [1, i],
                        deepLinkConversionData: [2, u],
                        deepLinkConversionSource: [3, u],
                        eventSharingSettingEnabled: [4, o],
                        globalSharingSettingEnabled: [5, o],
                        orderPaid: [8, o],
                        orderSignalType: [6, n.ORDER_SIGNAL_TYPE],
                        orderStatus: [7, l.ORDER_STATUS]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.CtwaOrderSignalWamEvent = d
        },
        100721: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmbDataSharingConsentSettingWamEvent = void 0;
            var r = a(901032),
                n = a(773693);
            const {
                BOOLEAN: l,
                INTEGER: o
            } = r.TYPES, i = (0, r.defineEvents)({
                SmbDataSharingConsentSetting: [3974, {
                        smbDataSharingConsentSettingEntryPoint: [1, n.SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT],
                        smbDataSharingConsentSettingType: [2, l],
                        smbDataSharingConsentSettingVersion: [3, o]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.SmbDataSharingConsentSettingWamEvent = i
        },
        682212: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(a(81109)),
                l = a(887341),
                o = a(72696),
                i = r(a(883891)),
                u = a(317285),
                d = a(628264),
                s = a(620982),
                c = a(340639),
                f = a(94153);
            const m = e => {
                const t = u.CTWADataSharingModel.getValue();
                let a;
                return a = t === l.ENUM_FALSE_NOTSET_TRUE.true ? {
                    globalSharingSettingEnabled: !0,
                    eventSharingSettingEnabled: e
                } : t === l.ENUM_FALSE_NOTSET_TRUE.false ? {
                    globalSharingSettingEnabled: !1
                } : null, a
            };
            var p = {
                markOrderAsUpdatedStatusAction: (e, t, a, r) => {
                    const l = (e => {
                        switch (e) {
                            case s.OrderStatus.Processing:
                                return f.ORDER_STATUS.PROCESSING;
                            case s.OrderStatus.Shipped:
                                return f.ORDER_STATUS.SHIPPED;
                            case s.OrderStatus.Complete:
                                return f.ORDER_STATUS.COMPLETED;
                            case s.OrderStatus.Canceled:
                                return f.ORDER_STATUS.CANCELLED;
                            case s.OrderStatus.Pending:
                            case s.OrderStatus.PartiallyShipped:
                            case s.OrderStatus.PreparingToShip:
                            case s.OrderStatus.PaymentRequested:
                            case s.OrderStatus.Delivered:
                                return null
                        }
                    })(a);
                    if (null == l) return;
                    const u = i.default.getCTWAEligibilityFromChat(e);
                    if (null == u || !(0, o.smbDataSharingConsentEnabled)()) return;
                    const p = {
                        ctwaOrderSignalVersion: 1,
                        deepLinkConversionData: u.data,
                        deepLinkConversionSource: u.source,
                        orderPaid: r,
                        orderSignalType: c.ORDER_SIGNAL_TYPE.UPDATED,
                        orderStatus: l
                    };
                    new d.CtwaOrderSignalWamEvent((0, n.default)((0, n.default)({}, p), m(t))).commit()
                },
                markOrderAsCreatedAction: (e, t) => {
                    const a = i.default.getCTWAEligibilityFromChat(e);
                    if (null == a || !(0, o.smbDataSharingConsentEnabled)()) return;
                    const r = {
                        ctwaOrderSignalVersion: 1,
                        deepLinkConversionData: a.data,
                        deepLinkConversionSource: a.source,
                        orderPaid: !1,
                        orderSignalType: c.ORDER_SIGNAL_TYPE.CREATED,
                        orderStatus: f.ORDER_STATUS.PROCESSING
                    };
                    new d.CtwaOrderSignalWamEvent((0, n.default)((0, n.default)({}, r), m(t))).commit()
                }
            };
            t.default = p
        },
        203293: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(887341),
                l = a(468926),
                o = a(317285),
                i = r(a(298188)),
                u = r(a(908081)),
                d = r(a(324093)),
                s = a(626194),
                c = r(a(969358)),
                f = a(753233),
                m = a(690495),
                p = a(525821),
                g = a(150103),
                h = a(100721),
                b = a(64123),
                E = a(180519),
                S = a(569056),
                v = a(676345),
                y = a(54052),
                _ = a(548360),
                O = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = T(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                C = (r(a(156720)), r(a(895851)));

            function T(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (T = function(e) {
                    return e ? a : t
                })(e)
            }
            const P = {
                iconColor: {
                    color: "s4recxw2"
                },
                header: {
                    lineHeight: "n5p9w1es"
                },
                paragraph: {
                    lineHeight: "l0ucn0he"
                }
            };

            function M(e, t) {
                const a = (0, C.default)(),
                    [r, T] = (0, O.useState)(null);
                return (0, O.useEffect)((() => ((0, b.getSMBDataSharingSettingAction)().then((e => {
                    a.aborted || (T(e), o.CTWADataSharingModel.subscribeForUpdates(T))
                })), () => {
                    o.CTWADataSharingModel.unsubscribeFromUpdates(T)
                })), [a.aborted]), O.default.createElement(u.default, {
                    ref: t,
                    theme: "settings"
                }, O.default.createElement(s.DrawerHeader, {
                    title: _.fbt._("Ads Data Sharing", null, {
                        hk: "1X9DpL"
                    }),
                    onBack: e.onClose,
                    type: s.DRAWER_HEADER_TYPE.LARGE
                }), O.default.createElement(d.default, null, O.default.createElement(c.default, {
                    theme: "expand-height",
                    animation: !1
                }, O.default.createElement(m.FlexColumn, {
                    xstyle: [v.uiPadding.horiz32, v.uiPadding.top14]
                }, O.default.createElement(m.FlexRow, null, O.default.createElement(E.TextDiv, {
                    size: "16",
                    color: "dark",
                    weight: "normal",
                    xstyle: [v.uiMargin.bottom16, P.header]
                }, _.fbt._("Share events to help you connect with customers", null, {
                    hk: "2AB7eI"
                }))), O.default.createElement(m.FlexRow, null, O.default.createElement(E.TextDiv, {
                    size: "14",
                    color: "muted",
                    xstyle: [v.uiMargin.bottom16, P.paragraph]
                }, _.fbt._("To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated or paid for.", null, {
                    hk: "3hHC3a"
                }))), O.default.createElement(m.FlexRow, {
                    align: "center",
                    xstyle: v.uiMargin.bottom16
                }, O.default.createElement(y.VisibilityOffIcon, {
                    height: 24,
                    width: 24,
                    xstyle: [v.uiMargin.start8, P.iconColor]
                }), O.default.createElement(E.TextSpan, {
                    size: "14",
                    color: "dark",
                    xstyle: [v.uiMargin.start18, P.paragraph]
                }, _.fbt._("Message and call content is not shared", null, {
                    hk: "2qawQQ"
                }))), O.default.createElement(m.FlexRow, {
                    align: "center",
                    xstyle: v.uiMargin.bottom16
                }, O.default.createElement(p.SecurityLockIcon, {
                    height: 24,
                    width: 24,
                    xstyle: [v.uiMargin.start8, P.iconColor]
                }), O.default.createElement(E.TextSpan, {
                    size: "14",
                    color: "dark",
                    xstyle: [v.uiMargin.start18, P.paragraph]
                }, _.fbt._("Customer names, email addresses and phone numbers are not shared", null, {
                    hk: "w6cG3"
                }))), O.default.createElement(m.FlexRow, {
                    align: "center",
                    xstyle: v.uiMargin.bottom16
                }, O.default.createElement(g.SettingsIcon, {
                    height: 24,
                    width: 24,
                    xstyle: [v.uiMargin.start8, P.iconColor]
                }), O.default.createElement(E.TextSpan, {
                    size: "14",
                    color: "dark",
                    xstyle: [v.uiMargin.start18, P.paragraph]
                }, _.fbt._("You can always come back here to change this setting", null, {
                    hk: "6mrOX"
                }))), O.default.createElement(m.FlexRow, {
                    xstyle: v.uiMargin.bottom40
                }, O.default.createElement(E.TextSpan, {
                    size: "14",
                    color: "muted",
                    xstyle: P.paragraph
                }, _.fbt._("Per Meta's {=m2}, you must comply with all applicable laws. This includes informing your customers and having permission to share data with Meta.", [_.fbt._implicitParam("=m2", O.default.createElement(f.ExternalLink, {
                    href: (0, S.getMetaBizTosUrl)()
                }, _.fbt._("Business Tools Terms", null, {
                    hk: "2vRji7"
                })))], {
                    hk: "2ObEI6"
                }))), O.default.createElement(m.FlexRow, {
                    align: "center"
                }, O.default.createElement(E.TextSpan, null, O.default.createElement(l.CheckBox, {
                    checked: r === n.ENUM_FALSE_NOTSET_TRUE.true,
                    onChange: () => {
                        const t = r === n.ENUM_FALSE_NOTSET_TRUE.true ? n.ENUM_FALSE_NOTSET_TRUE.false : n.ENUM_FALSE_NOTSET_TRUE.true;
                        new h.SmbDataSharingConsentSettingWamEvent({
                            smbDataSharingConsentSettingVersion: 1,
                            smbDataSharingConsentSettingType: t === n.ENUM_FALSE_NOTSET_TRUE.true,
                            smbDataSharingConsentSettingEntryPoint: e.entrypoint
                        }).commit(), i.default.enableUpsell(), (0, b.setSMBDataSharingSettingAction)(t).then((e => {
                            a.aborted || T(e)
                        }))
                    }
                })), O.default.createElement(E.TextSpan, {
                    size: "16",
                    xstyle: [P.paragraph, v.uiPadding.start24]
                }, _.fbt._("Allow Meta to receive information about events", null, {
                    hk: "37k6Tk"
                })))))))
            }
            var x = (0, O.forwardRef)(M);
            t.default = x
        },
        936734: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(887341),
                l = a(468926),
                o = a(306703),
                i = a(317285),
                u = r(a(298188)),
                d = a(900316),
                s = a(690495),
                c = a(114850),
                f = r(a(203293)),
                m = a(64123),
                p = a(180519),
                g = a(676345),
                h = a(773693),
                b = a(548360),
                E = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                S = r(a(156720)),
                v = r(a(895851));

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (y = function(e) {
                    return e ? a : t
                })(e)
            }
            const _ = {
                    upsell: {
                        lineHeight: "togicx6b",
                        overflowX: "gfz4du6o",
                        overflowY: "r7fjleex",
                        wordWrap: "b6f1x6w7"
                    },
                    learnMore: {
                        cursor: "ajgl1lbb"
                    },
                    themeOrderCreate: {
                        backgroundColor: "f6ipylw5"
                    },
                    themeLabelsOptOut: {
                        borderTopWidth: "gofg5ll1",
                        borderTopStyle: "d1poss59",
                        borderTopColor: "gclmp953"
                    }
                },
                O = e => E.default.createElement(o.SelectableLink, {
                    className: (0, S.default)(_.learnMore),
                    id: "data-sharing-learn-more-link",
                    selectable: !0,
                    onClick: () => {
                        return t = e.entryPoint, c.ModalManager.close(), void d.DrawerManager.openDrawerLeft(E.default.createElement(f.default, {
                            onClose: () => d.DrawerManager.closeDrawerLeft(),
                            entrypoint: t
                        }));
                        var t
                    }
                }, e.children);
            var C = e => {
                let {
                    onCheckboxToggle: t,
                    checkboxValue: a,
                    theme: r
                } = e;
                const o = (0, v.default)(),
                    [d, c] = (0, E.useState)(null);
                if ((0, E.useEffect)((() => ((0, m.getSMBDataSharingSettingAction)().then((e => {
                        o.aborted || (c(e), i.CTWADataSharingModel.subscribeForUpdates(c))
                    })), () => {
                        i.CTWADataSharingModel.unsubscribeFromUpdates(c)
                    })), [o.aborted]), null == d || d === n.ENUM_FALSE_NOTSET_TRUE.notset) return null;
                let f;
                "order-create" === r ? f = [_.themeOrderCreate, g.uiPadding.start16, g.uiPadding.top16, g.uiPadding.bottom32] : "order-update" === r ? f = [g.uiPadding.start28, g.uiPadding.top48, g.uiPadding.bottom16] : "labels-opt-out" === r && (f = [_.themeLabelsOptOut, g.uiMargin.top24, g.uiPadding.top12, g.uiPadding.start30]);
                const S = d === n.ENUM_FALSE_NOTSET_TRUE.true,
                    y = d === n.ENUM_FALSE_NOTSET_TRUE.false && u.default.isUpsellEnabled();
                let C;
                C = "labels-opt-out" === r ? h.SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT.ENTRY_POINT_LABELS_SCREEN : h.SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT.ENTRY_POINT_ORDER_SCREEN;
                const T = "labels-opt-out" === r ? b.fbt._("Share this label update with Meta. {=m1}", [b.fbt._implicitParam("=m1", E.default.createElement(O, {
                    entryPoint: C
                }, b.fbt._("Learn more", null, {
                    hk: "3DEWAO"
                })))], {
                    hk: "3m5DxC"
                }) : b.fbt._("Share this order status with Meta. {=m1}", [b.fbt._implicitParam("=m1", E.default.createElement(O, {
                    entryPoint: C
                }, b.fbt._("Learn more", null, {
                    hk: "ScE4C"
                })))], {
                    hk: "2JjUWa"
                });
                return E.default.createElement(s.FlexRow, {
                    align: "center",
                    xstyle: f
                }, y ? E.default.createElement(p.TextDiv, {
                    size: "12",
                    color: "muted",
                    xstyle: [g.uiMargin.bottom8, _.upsell]
                }, b.fbt._("Enabling Ads Data Sharing can help you reach the right audience on Facebook and Instagram. {=m1}", [b.fbt._implicitParam("=m1", E.default.createElement(O, {
                    entryPoint: C
                }, b.fbt._("Go to settings", null, {
                    hk: "Wi75v"
                })))], {
                    hk: "d6FtL"
                })) : null, S ? E.default.createElement(E.default.Fragment, null, E.default.createElement(l.CheckBox, {
                    checked: a,
                    onChange: t
                }), E.default.createElement(p.TextDiv, {
                    size: "12",
                    color: "muted",
                    xstyle: g.uiMargin.start16
                }, T)) : null)
            };
            t.default = C
        },
        919175: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendOrderDetailsMessageAsMerchant = function() {
                return P.apply(this, arguments)
            }, t.sendOrderPaymentMethodUpdate = function() {
                return w.apply(this, arguments)
            }, t.sendOrderPaymentStatusMessageAsMerchant = function() {
                return k.apply(this, arguments)
            }, t.sendOrderStatusMessageAsMerchant = function() {
                return M.apply(this, arguments)
            };
            var n = r(a(81109)),
                l = r(a(348926)),
                o = a(632157),
                i = a(402994),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(395557)),
                d = r(a(873969)),
                s = a(713464),
                c = r(a(753110)),
                f = r(a(182394)),
                m = r(a(756680)),
                p = r(a(565754)),
                g = a(373070),
                h = a(620982),
                b = a(918602),
                E = a(693741),
                S = a(459857),
                v = a(669050),
                y = r(a(556869));

            function _(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (_ = function(e) {
                    return e ? a : t
                })(e)
            }

            function O(e, t) {
                var a, r;
                if (null == t) return "";
                const n = s.CatalogCollection.get((0, v.createWid)(e)),
                    l = null == n ? void 0 : n.productCollection.get(t),
                    o = null == l || null === (a = l.getProductImageCollectionHead()) || void 0 === a ? void 0 : a.mediaData.preview;
                return o instanceof m.default && null !== (r = o.getBase64()) && void 0 !== r ? r : ""
            }

            function C() {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = (0, l.default)((function*(e) {
                    const {
                        caption: t,
                        chat: a,
                        nativeFlowName: r,
                        buttonParamsJson: l,
                        errorMessage: u,
                        thumbnail: d,
                        buttonName: s,
                        contextInfo: c
                    } = e, m = (0, S.getMaybeMeUser)(), h = d ? {
                        title: void 0,
                        subtitle: void 0,
                        mediaType: void 0,
                        hasMediaAttachment: !1,
                        thumbnail: d
                    } : void 0, v = (0, n.default)({
                        type: g.MSG_TYPE.INTERACTIVE,
                        ack: i.ACK.CLOCK,
                        from: m,
                        id: new p.default({
                            from: m,
                            to: a.id,
                            id: yield p.default.newId(), participant: void 0, selfDir: "out"
                        }),
                        local: !0,
                        isNewMsg: !0,
                        self: "out",
                        t: (0, o.unixTime)(),
                        to: a.id,
                        caption: t,
                        nativeFlowName: r,
                        interactiveHeader: h,
                        interactiveType: f.default.NATIVE_FLOW,
                        interactivePayload: {
                            buttons: [{
                                name: s,
                                buttonParamsJson: l
                            }],
                            messageVersion: 1
                        }
                    }, c);
                    if ((0, S.isMeAccount)(a.id)) try {
                        return void(yield(0, b.addAndSendMsgToChat)(a, v)[0])
                    } catch (e) {
                        throw __LOG__(3)
                        `${u}: ${e}`, e
                    }
                    try {
                        const e = yield(0, b.addAndSendMsgToChat)(a, v)[1];
                        if (!e || e.messageSendResult !== E.SendMsgResult.OK) throw (0, y.default)("Order message SendMsgResult failure status")
                    } catch (e) {
                        throw __LOG__(3)
                        `${u}: ${e}`, e
                    }
                }))).apply(this, arguments)
            }

            function P() {
                return (P = (0, l.default)((function*(e) {
                    var t;
                    const {
                        order: a,
                        chat: r,
                        orderNote: n,
                        discount: l,
                        shipping: o,
                        tax: i,
                        total: s,
                        offset: f
                    } = e, m = null === (t = a.orderItemCollection.head()) || void 0 === t ? void 0 : t.id, p = O(a.sellerJid, m), g = a.orderItemCollection.map((e => ({
                        retailer_id: e.id,
                        name: e.name,
                        amount: {
                            value: e.price,
                            offset: f
                        },
                        quantity: e.quantity,
                        isCustomItem: e.isCustomItem,
                        isQuantitySet: e.isQuantitySet
                    }))), b = {
                        reference_id: (0, d.default)(),
                        type: "physical-goods",
                        payment_configuration: "merchant_categorization_code",
                        currency: a.currency,
                        total_amount: {
                            value: s,
                            offset: f
                        },
                        order_request_id: a.id,
                        order: {
                            status: (0, h.getDefaultOrderStatus)(),
                            items: g,
                            subtotal: {
                                value: Number(a.subtotal),
                                offset: f
                            },
                            tax: null == i ? void 0 : {
                                value: i,
                                offset: f
                            },
                            shipping: null == o ? void 0 : {
                                value: o,
                                offset: f
                            },
                            discount: null == l ? void 0 : {
                                value: l,
                                offset: f
                            }
                        }
                    };
                    yield C({
                        caption: n,
                        chat: r,
                        nativeFlowName: c.default.ORDER_DETAILS,
                        buttonParamsJson: u.stringify(b),
                        errorMessage: "Order message send to chat failure",
                        thumbnail: p,
                        buttonName: "review_and_pay"
                    })
                }))).apply(this, arguments)
            }

            function M() {
                return (M = (0, l.default)((function*(e) {
                    const {
                        chat: t,
                        sellerJid: a,
                        orderInfo: r,
                        orderNote: n,
                        orderStatus: l,
                        offset: o,
                        paymentStatus: i,
                        paymentMethod: d
                    } = e, s = r.items, f = r.referenceId, m = O(a, s[0].id), p = x(r, l, f, o, i, d), g = (0, h.findOrderDetailsMessage)(t, f), b = null == g ? void 0 : g.msgContextInfo(t.id);
                    yield C({
                        caption: n,
                        chat: t,
                        nativeFlowName: c.default.ORDER_STATUS,
                        buttonParamsJson: u.stringifyPaymentStatus(p),
                        errorMessage: "Order message sent to chat failure",
                        thumbnail: m,
                        buttonName: "review_order",
                        contextInfo: b
                    })
                }))).apply(this, arguments)
            }
            const x = (e, t, a, r, n, l) => {
                const i = e.items.map((e => {
                    var t;
                    return {
                        retailer_id: e.id,
                        name: e.name,
                        amount: {
                            value: null !== (t = e.amount) && void 0 !== t ? t : 0,
                            offset: r
                        },
                        quantity: e.quantity,
                        isCustomItem: e.isCustomItem,
                        isQuantitySet: e.isQuantitySet
                    }
                }));
                return {
                    reference_id: a,
                    payment_timestamp: (0, o.unixTime)(),
                    currency: e.currency,
                    payment_status: n,
                    payment_method: l,
                    total_amount: {
                        value: e.totalAmount,
                        offset: r
                    },
                    order: {
                        status: t,
                        items: i,
                        subtotal: {
                            value: Number(e.subtotal),
                            offset: r
                        },
                        tax: null == e.tax ? void 0 : {
                            value: e.tax,
                            offset: r
                        },
                        shipping: null == e.shipping ? void 0 : {
                            value: e.shipping,
                            offset: r
                        },
                        discount: null == e.discount ? void 0 : {
                            value: e.discount,
                            offset: r
                        }
                    }
                }
            };

            function k() {
                return (k = (0, l.default)((function*(e) {
                    var t;
                    const {
                        chat: a,
                        orderInfo: r,
                        orderStatus: n,
                        sellerJid: l,
                        offset: o,
                        orderNote: i,
                        paymentStatus: d,
                        paymentMethod: s
                    } = e, f = r.referenceId, m = O(l, null === (t = r.items.at(0)) || void 0 === t ? void 0 : t.id), p = x(r, n, f, o, d, s), g = (0, h.findOrderDetailsMessage)(a, f), b = null == g ? void 0 : g.msgContextInfo(a.id);
                    yield C({
                        caption: i,
                        chat: a,
                        nativeFlowName: c.default.PAYMENT_STATUS,
                        buttonParamsJson: u.stringifyPaymentStatus(p),
                        errorMessage: "Order message send to chat failure",
                        thumbnail: m,
                        buttonName: "payment_status",
                        contextInfo: b
                    })
                }))).apply(this, arguments)
            }

            function w() {
                return (w = (0, l.default)((function*(e) {
                    var t;
                    const {
                        chat: a,
                        orderInfo: r,
                        orderStatus: n,
                        sellerJid: l,
                        offset: o,
                        paymentMethod: i,
                        paymentStatus: d
                    } = e, s = r.referenceId, f = O(l, null === (t = r.items.at(0)) || void 0 === t ? void 0 : t.id), m = x(r, n, s, o, d, i), p = (0, h.findOrderDetailsMessage)(a, s), g = null == p ? void 0 : p.msgContextInfo(a.id);
                    yield C({
                        chat: a,
                        caption: null,
                        nativeFlowName: c.default.PAYMENT_METHOD,
                        buttonParamsJson: u.stringifyPaymentStatus(m),
                        errorMessage: "Order message send to chat failure",
                        thumbnail: f,
                        buttonName: "payment_method",
                        contextInfo: g
                    })
                }))).apply(this, arguments)
            }
        },
        305160: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return i.default.createElement(l.default, {
                    "aria-label": o.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    Icon: n.DeleteIcon,
                    title: o.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    xstyle: u.deleteIcon,
                    onClick: e.onClick
                })
            };
            var n = a(184385),
                l = r(a(397778)),
                o = a(548360),
                i = r(a(667294));
            r(a(156720));
            const u = {
                deleteIcon: {
                    color: "svlsagor",
                    ":hover": {
                        color: "kbf8aj4n"
                    }
                }
            }
        },
        359162: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddOrderItem = function(e) {
                let {
                    title: t,
                    onClick: a
                } = e;
                return o.default.createElement(n.default, {
                    testid: "add-order-item-button",
                    image: o.default.createElement(l.AddItemIcon, null),
                    primary: t,
                    theme: "add-order-item",
                    onClick: a
                })
            };
            var n = r(a(170206)),
                l = a(114459),
                o = r(a(667294))
        },
        730952: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CatalogProductPrice = function(e) {
                let {
                    orderItem: t,
                    price: a,
                    priceStage: r,
                    currency: m,
                    onPriceChange: p,
                    onPriceStageChange: g,
                    onEnter: h
                } = e;
                switch (r) {
                    case f.Editing:
                        return s.default.createElement("div", {
                            role: "textbox",
                            onClick: e => e.stopPropagation()
                        }, s.default.createElement(l.FlexRow, {
                            align: "center"
                        }, s.default.createElement("span", {
                            className: (0, c.default)(u.uiPadding.end3)
                        }, (0, n.formatAmount1000ToParts)(m, 0).symbol), s.default.createElement(o.default, {
                            currency: m,
                            value: null != a ? String(a / 1e3) : "",
                            onSave: e => {
                                g(f.EditableFilled), p((0, n.valueFromString)(m, e))
                            },
                            onCancel: () => {
                                g(null == a ? f.EditableBlank : f.EditableFilled)
                            }
                        })));
                    case f.EditableFilled:
                        return s.default.createElement("div", {
                            role: "button",
                            className: (0, c.default)(i.default.clickableText),
                            onClick: e => {
                                g(f.Editing), e.stopPropagation()
                            }
                        }, (0, n.formatAmount1000)(m, Number(a)));
                    case f.EditableBlank:
                        return s.default.createElement("span", {
                            role: "button",
                            className: (0, c.default)(i.default.clickableText),
                            onClick: e => {
                                g(f.Editing), e.stopPropagation()
                            }
                        }, d.fbt._("Enter price", null, {
                            hk: "1Bd2B6"
                        }));
                    default:
                        return s.default.createElement("div", null, (0, n.formatAmount1000)(m, t.price))
                }
            }, t.PriceStage = void 0;
            var n = a(27578),
                l = a(690495),
                o = r(a(169256)),
                i = r(a(496254)),
                u = a(676345),
                d = a(548360),
                s = r(a(667294)),
                c = r(a(156720));
            const f = a(76672).Mirrored(["Readonly", "EditableBlank", "EditableFilled", "Editing"]);
            t.PriceStage = f
        },
        169256: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    currency: t,
                    value: a,
                    onSave: r,
                    onCancel: n
                } = e;
                const [o, c] = (0, d.useState)(null), [p, g] = (0, d.useState)(a);
                return (0, l.useShowToastErrors)({
                    productPriceError: o
                }), d.default.createElement("div", {
                    className: (0, s.default)(m)
                }, d.default.createElement(i.RichTextField, {
                    managed: !0,
                    constrainedWidth: !0,
                    hideFloatingLabel: !0,
                    focusOnMount: !0,
                    editable: !0,
                    lockable: !0,
                    startActive: !0,
                    placeholder: u.fbt._("Price", null, {
                        hk: "3OsKht"
                    }),
                    value: p,
                    theme: "default",
                    maxLength: 12,
                    customStyleThemes: ["disabledLabel", "noErrorInfo"],
                    testid: "order-detail-amount-input",
                    validate: e => {
                        const a = f(e, t);
                        return c(a), !a
                    },
                    onChange: e => {
                        const a = e.text;
                        g(a), c(f(a, t))
                    },
                    onSave: () => {
                        r(p)
                    },
                    onCancel: n,
                    error: o
                }))
            };
            var n = a(27578),
                l = a(353950),
                o = a(238977),
                i = a(202391),
                u = a(548360),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = c(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                s = r(a(156720));

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (c = function(e) {
                    return e ? a : t
                })(e)
            }

            function f(e, t) {
                if (null == e || !e.length || !(0, n.validatePriceString)(t, e)) return u.fbt._("Enter a valid price", null, {
                    hk: "1WZB7p"
                });
                return (0, n.valueFromString)(t, e) / o.DEFAULT_OFFSET < 0 ? u.fbt._("Enter a positive price", null, {
                    hk: "1goGAM"
                }) : void 0
            }
            const m = {
                textAlign: "ljrqcn24",
                width: "h4dw90qs",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                marginTop: "obt84bhp",
                paddingEnd: "fhfm09ip"
            }
        },
        353950: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.additionalChargeErrorHandler = function(e) {
                let {
                    label: t,
                    currency: a,
                    fieldType: o,
                    maxFlatValue: i,
                    enablePercentValueCheck: u,
                    value: d
                } = e;
                if (!(0, n.validatePriceString)(a, d)) return c();
                const s = (0, n.valueFromString)(a, d) / l.DEFAULT_OFFSET;
                if (s < 0) return f();
                if (o === l.PERCENTAGE_SYMBOL) {
                    if (Boolean(u) && s > 100) return m(null != t ? t : "")
                } else if ((0, r.isNumber)(i) && s > i) return p(null != t ? t : "");
                return ""
            }, t.errorMessageBigPercentageValue = t.errorMessageBigFlatValue = void 0, t.getOrderDetailInvalidNumberErrorMessage = c, t.getOrderDetailNegativeNumberErrorMessage = f, t.useShowToastErrors = function(e) {
                (0, d.useEffect)((() => {
                    for (const t in e) {
                        const a = e[t];
                        null != a && i.ToastManager.open(d.default.createElement(o.Toast, {
                            duration: 1e4,
                            id: t + a.toString(),
                            msg: a,
                            action: {
                                actionText: u.fbt._("OKAY", null, {
                                    hk: "3RIrWh"
                                }),
                                dismiss: !0,
                                theme: "success"
                            }
                        }))
                    }
                }), [e])
            };
            var r = a(724976),
                n = a(27578),
                l = a(238977),
                o = a(625786),
                i = a(390737),
                u = a(548360),
                d = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = s(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (s = function(e) {
                    return e ? a : t
                })(e)
            }

            function c() {
                return u.fbt._("Enter a valid number", null, {
                    hk: "34R7Hv"
                })
            }

            function f() {
                return u.fbt._("Enter a positive number", null, {
                    hk: "3UMjdw"
                })
            }
            const m = e => u.fbt._("{input_label} cannot be more than 100%", [u.fbt._param("input_label", e)], {
                hk: "1WMDbw"
            });
            t.errorMessageBigPercentageValue = m;
            const p = e => u.fbt._("{input_label} cannot be more than subtotal", [u.fbt._param("input_label", e)], {
                hk: "3IRSWP"
            });
            t.errorMessageBigFlatValue = p
        },
        453823: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    details: t,
                    currency: a,
                    priceMap: r,
                    items: v,
                    onDeleteItem: _,
                    onAddItem: O,
                    onPriceChange: C,
                    onItemQuantityChange: T
                } = e;
                const [P, M] = (0, E.useState)(null), [x, k] = (0, E.useState)({}), w = (0, E.useCallback)((e => null != e.price ? p.PriceStage.Readonly : null != (null == r ? void 0 : r[e.id]) ? p.PriceStage.EditableFilled : p.PriceStage.EditableBlank), [r]), D = (0, E.useCallback)(((e, t) => {
                    k((a => (0, l.default)((0, l.default)({}, a), {}, {
                        [t.id]: e
                    })))
                }), []), N = Boolean(t), A = (e, t) => {
                    var n, l;
                    return E.default.createElement("div", {
                        className: (0, S.default)(y.productDeleteWrapper)
                    }, E.default.createElement(p.CatalogProductPrice, {
                        price: null !== (n = null == r ? void 0 : r[e.id]) && void 0 !== n ? n : null,
                        priceStage: null !== (l = x[e.id]) && void 0 !== l ? l : w(e),
                        currency: a,
                        orderItem: e,
                        onPriceChange: t => null == C ? void 0 : C(t, e.id),
                        onPriceStageChange: t => {
                            D(t, e)
                        },
                        onEnter: () => {
                            M(null)
                        }
                    }), t === P && E.default.createElement("div", {
                        className: (0, S.default)(h.uiMargin.start5)
                    }, E.default.createElement(i.default, {
                        onClick: a => {
                            var r, n;
                            a.stopPropagation(), r = () => null == _ ? void 0 : _(t), n = e.name, f.ModalManager.open(E.default.createElement(s.ConfirmPopup, {
                                title: b.fbt._("Delete {order_item_name} from order?", [b.fbt._param("order_item_name", n)], {
                                    hk: "2Na2JW"
                                }),
                                okText: b.fbt._("Delete", null, {
                                    hk: "4m6dzv"
                                }),
                                onOK: () => {
                                    null == r || r(), f.ModalManager.close()
                                },
                                cancelText: b.fbt._("Cancel", null, {
                                    hk: "15AkJV"
                                }),
                                onCancel: () => {
                                    f.ModalManager.close()
                                }
                            }))
                        }
                    })))
                };
                return E.default.createElement(c.FlexColumn, {
                    align: "stretch",
                    xstyle: y.orderItemsContainer
                }, !N && ((0, o.orderDetailsFromCatalogEnabled)() || (0, o.orderDetailsCustomItemEnabled)()) && E.default.createElement(m.AddOrderItem, {
                    title: b.fbt._("Add items", null, {
                        hk: "M4YqU"
                    }),
                    onClick: () => null == O ? void 0 : O()
                }), v.map(((e, t) => {
                    const a = b.fbt._("Quantity {item-quantity}", [b.fbt._param("item-quantity", e.quantity)], {
                        hk: "3ESE8k"
                    });
                    return E.default.createElement(u.default, (0, n.default)({
                        key: t,
                        testid: "order-item-cell",
                        className: (0, S.default)(t > 0 && h.uiPadding.top10),
                        disabled: !0,
                        image: E.default.createElement(g.OrderItemIcon, {
                            mediaData: e.thumbnailUrl ? e.mediaData : null,
                            useCustomIcon: e.isCustomItem
                        }),
                        primary: E.default.createElement("span", {
                            className: (0, S.default)(y.orderItemName),
                            title: e.name
                        }, e.name),
                        secondary: N ? a : E.default.createElement(d.default, {
                            quantity: e.quantity,
                            onAddOneClick: () => null == T ? void 0 : T(t, e.quantity + 1),
                            onRemoveOneClick: () => null == T ? void 0 : T(t, e.quantity - 1)
                        }),
                        theme: "add-order-item",
                        detail: A(e, t)
                    }, N ? void 0 : {
                        onMouseEnter: () => M(t),
                        onMouseLeave: () => M(null)
                    }))
                })))
            };
            var n = r(a(967154)),
                l = r(a(81109)),
                o = a(72696),
                i = r(a(305160)),
                u = r(a(170206)),
                d = r(a(763879)),
                s = a(103440),
                c = a(690495),
                f = a(114850),
                m = a(359162),
                p = a(730952),
                g = a(114459),
                h = a(676345),
                b = a(548360),
                E = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                S = r(a(156720));

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (v = function(e) {
                    return e ? a : t
                })(e)
            }
            const y = {
                orderItemsContainer: {
                    marginTop: "jdreu547",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "n5a6z3tu",
                    marginStart: "svoq16ka"
                },
                orderItemName: {
                    color: "tviruh8d",
                    whiteSpace: "le5p0ye3",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    textOverflow: "lhj4utae"
                },
                productDeleteWrapper: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n"
                }
            }
        },
        238977: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PERCENTAGE_SYMBOL = t.DEFAULT_OFFSET = void 0, t.calculateFlatAmounts = function(e) {
                let {
                    orderSubtotal: t,
                    discountType: a,
                    discountText: r,
                    taxType: i,
                    taxText: u,
                    shippingText: d
                } = e;
                const s = o({
                        type: a,
                        value: r,
                        total: t
                    }),
                    c = o({
                        type: i,
                        value: u,
                        total: t - (null != s ? s : 0)
                    }),
                    f = l(d),
                    m = t - (null != s ? s : 0) + (null != f ? f : 0) + (null != c ? c : 0);
                return {
                    total: Math.trunc(m * n),
                    tax: null == c ? null : Math.trunc(c * n),
                    shipping: null == f ? null : Math.trunc(f * n),
                    discount: null == s ? null : Math.trunc(s * n)
                }
            };
            var r = a(27578);
            t.PERCENTAGE_SYMBOL = "%";
            const n = 1e3;

            function l(e) {
                if ("" === e) return null;
                const t = (0, r.valueFromString)("USD", e) / n;
                return Number.isNaN(t) ? 0 : t
            }

            function o(e) {
                let {
                    type: t,
                    value: a,
                    total: r
                } = e;
                const n = l(a);
                return null == n ? null : "%" === t ? n / 100 * r : n
            }
            t.DEFAULT_OFFSET = n
        },
        535407: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    children: t
                } = e;
                return l.default.createElement(n.FlexColumn, {
                    xstyle: u.container,
                    align: "stretch"
                }, l.Children.map(t, ((e, t) => l.default.createElement(l.default.Fragment, null, 0 !== t ? l.default.createElement("div", {
                    className: (0, o.default)(u.separator)
                }) : null, e))))
            };
            var n = a(690495),
                l = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = i(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                o = r(a(156720));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (i = function(e) {
                    return e ? a : t
                })(e)
            }
            const u = {
                container: {
                    gap: "mqqyhd6v"
                },
                separator: {
                    height: "bbl9m3t3",
                    borderTop: "iupwfssi"
                }
            }
        },
        210762: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    orderId: t,
                    orderStatus: a,
                    sellerWid: r,
                    testid: g
                } = e;
                const h = l.ContactCollection.get(r),
                    b = h ? f.default.createElement(f.default.Fragment, null, f.default.createElement(i.FlexRow, null, f.default.createElement(o.DetailImage, {
                        id: r,
                        size: 48
                    })), f.default.createElement(i.FlexColumn, {
                        align: "center"
                    }, f.default.createElement(u.Name, {
                        className: (0, m.default)(p.sellerName),
                        useDisplayName: !0,
                        contact: h
                    }), null != t ? f.default.createElement(d.TextDiv, {
                        color: "secondary",
                        weight: "medium",
                        className: (0, m.default)(p.uppercase, s.uiMargin.top4)
                    }, (0, n.isOrderContentOptimizationEnabled)() ? c.fbt._("charge #{order-id}", [c.fbt._param("order-id", t)], {
                        hk: "1lJzZv"
                    }) : c.fbt._("order #{order-id}", [c.fbt._param("order-id", t)], {
                        hk: "1JaZPw"
                    })) : null)) : null;
                return f.default.createElement(i.FlexColumn, {
                    align: "center",
                    xstyle: [p.container, s.uiPadding.horiz16],
                    testid: g
                }, b, a)
            };
            var n = a(72696),
                l = a(177938),
                o = a(23641),
                i = a(690495),
                u = a(21645),
                d = a(180519),
                s = a(676345),
                c = a(548360),
                f = r(a(667294)),
                m = r(a(156720));
            const p = {
                container: {
                    gap: "nypubj7v"
                },
                uppercase: {
                    textTransform: "ofejerhi"
                },
                sellerName: {
                    fontSize: "p9fp32ui",
                    lineHeight: "tkq7s68q",
                    fontWeight: "hnx8ox4h",
                    color: "tl2vja3b"
                }
            }
        },
        496254: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            r(a(156720));
            t.default = {
                clickableText: {
                    color: "o0rubyzf",
                    cursor: "ajgl1lbb",
                    fontWeight: "m1e7cby3",
                    lineHeight: "iq0m558w",
                    letterSpacing: "ysae3w6m",
                    ":hover": {
                        textDecoration: "edeob0r2"
                    }
                }
            }
        },
        697944: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    orderStatus: t = (0, i.getDefaultOrderStatus)()
                } = e;
                return c.default.createElement(d.TextDiv, {
                    color: m(t),
                    theme: "small",
                    xstyle: f.container
                }, function(e) {
                    switch (e) {
                        case i.OrderStatus.Pending:
                        case i.OrderStatus.Processing:
                        case i.OrderStatus.PreparingToShip:
                        case i.OrderStatus.PaymentRequested:
                            return c.default.createElement(u.StatusClockIcon, {
                                width: 12,
                                displayInline: !0,
                                xstyle: [f.icon, f.iconCipherText]
                            });
                        case i.OrderStatus.PartiallyShipped:
                        case i.OrderStatus.Shipped:
                            return c.default.createElement(o.LocalShippingIcon, {
                                width: 12,
                                displayInline: !0,
                                xstyle: f.icon
                            });
                        case i.OrderStatus.Canceled:
                            return c.default.createElement(l.AlertErrorIcon, {
                                width: 12,
                                displayInline: !0,
                                xstyle: f.icon
                            });
                        case i.OrderStatus.Complete:
                        case i.OrderStatus.Delivered:
                            return c.default.createElement(n.ActionCheckCircleIcon, {
                                width: 12,
                                displayInline: !0,
                                xstyle: f.icon
                            })
                    }
                }(t), function(e) {
                    switch (e) {
                        case i.OrderStatus.Pending:
                            return s.fbt._("Pending", null, {
                                hk: "2djOp6"
                            });
                        case i.OrderStatus.Processing:
                            return s.fbt._("Processing", null, {
                                hk: "1YWzCh"
                            });
                        case i.OrderStatus.PartiallyShipped:
                            return s.fbt._("Partially shipped", null, {
                                hk: "1uyPMt"
                            });
                        case i.OrderStatus.Shipped:
                            return s.fbt._("Shipped", null, {
                                hk: "4jvcHU"
                            });
                        case i.OrderStatus.Canceled:
                            return s.fbt._("Canceled", null, {
                                hk: "NFaHh"
                            });
                        case i.OrderStatus.Complete:
                            return s.fbt._("Complete", null, {
                                hk: "3ZHRbN"
                            });
                        case i.OrderStatus.PreparingToShip:
                            return s.fbt._("Preparing to ship", null, {
                                hk: "2Tq816"
                            });
                        case i.OrderStatus.PaymentRequested:
                            return s.fbt._("Payment requested", null, {
                                hk: "2lBzyf"
                            });
                        case i.OrderStatus.Delivered:
                            return s.fbt._("Delivered", null, {
                                hk: "2GwOKM"
                            })
                    }
                }(t))
            };
            var n = a(926813),
                l = a(640998),
                o = a(166706),
                i = a(620982),
                u = a(468427),
                d = a(180519),
                s = a(548360),
                c = r(a(667294));
            r(a(156720));
            const f = {
                container: {
                    backgroundColor: "i16jpgpt",
                    display: "i86elurf",
                    alignItems: "gndfcl4n",
                    fontSize: "dsh4tgtl",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "przvwfww",
                    paddingStart: "k4wy2cgb",
                    borderTopStartRadius: "g130k69c",
                    borderTopEndRadius: "k1a7joe8",
                    borderBottomEndRadius: "dc5qina8",
                    borderBottomStartRadius: "kfr1vweg"
                },
                icon: {
                    marginEnd: "mw4yctpw"
                },
                iconCipherText: {
                    marginTop: "dwvzf427"
                }
            };

            function m(e) {
                switch (e) {
                    case i.OrderStatus.Pending:
                    case i.OrderStatus.Processing:
                    case i.OrderStatus.PartiallyShipped:
                    case i.OrderStatus.Shipped:
                    case i.OrderStatus.PreparingToShip:
                    case i.OrderStatus.PaymentRequested:
                        return;
                    case i.OrderStatus.Canceled:
                        return "danger";
                    case i.OrderStatus.Complete:
                    case i.OrderStatus.Delivered:
                        return "success"
                }
            }
        },
        392432: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    chat: t,
                    onSubmit: a
                } = e;
                const r = (0, o.getFormattedUser)(t.contact),
                    [p, b] = (0, f.useState)(!1);
                return f.default.createElement(l.ConfirmPopup, {
                    testid: "order-ephemeral-exemption-confirm-popup",
                    title: c.fbt._("Disappearing messages are turned on", null, {
                        hk: "22mxJR"
                    }),
                    onOK: () => {
                        p && s.default.set(d.KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED, !0), i.ModalManager.close(), a()
                    },
                    onCancel: () => {
                        i.ModalManager.close()
                    }
                }, f.default.createElement(u.WDSTextSectionTitle, null, c.fbt._("Disappearing messages are turned on in your chat with {contact-name}, but this order will not disappear.", [c.fbt._param("contact-name", r)], {
                    hk: "4kgj97"
                })), f.default.createElement("div", null, f.default.createElement("div", {
                    className: (0, m.default)(g)
                }, f.default.createElement(n.CheckBox, {
                    testid: "order-ephemeral-exemption-popup-skip-checkbox",
                    id: "order-ephemeral-exemption-popup-skip-checkbox-id",
                    checked: p,
                    onChange: () => {
                        b(!p)
                    }
                }), f.default.createElement("label", {
                    htmlFor: "order-ephemeral-exemption-popup-skip-checkbox-id",
                    className: (0, m.default)(h)
                }, c.fbt._("Don't show me this again", null, {
                    hk: "2g9ZnR"
                })))))
            };
            var n = a(468926),
                l = a(103440),
                o = a(714574),
                i = a(114850),
                u = a(180519),
                d = a(94872),
                s = r(a(53575)),
                c = a(548360),
                f = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                m = r(a(156720));

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (p = function(e) {
                    return e ? a : t
                })(e)
            }
            const g = {
                    paddingTop: "n1yiu2zv",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "eb4rp10x",
                    paddingStart: "gx1rr48f"
                },
                h = {
                    marginStart: "fooq7fky"
                }
        },
        114459: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddItemIcon = function() {
                return i.default.createElement("div", {
                    className: (0, u.default)(d)
                }, i.default.createElement(n.AddItemIcon, {
                    className: (0, u.default)(c)
                }))
            }, t.OrderItemIcon = function(e) {
                let {
                    mediaData: t,
                    useCustomIcon: a
                } = e;
                return a || null == t ? i.default.createElement(f, null) : i.default.createElement(o.ProductThumb, {
                    mediaData: t,
                    theme: "orderSquareThumb"
                })
            };
            var n = a(712187),
                l = a(492866),
                o = a(493770),
                i = r(a(667294)),
                u = r(a(156720));
            const d = {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    width: "dyxdk6fi",
                    height: "m3o1wsh7",
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    backgroundColor: "osuelnrh",
                    boxShadow: "gnkxn0la"
                },
                s = {
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    color: "s4recxw2"
                },
                c = {
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    color: "s4recxw2"
                };

            function f() {
                return i.default.createElement("div", {
                    className: (0, u.default)(d)
                }, i.default.createElement(l.ListMsgIconIcon, {
                    className: (0, u.default)(s)
                }))
            }
        },
        832545: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderSummaryDrawer = function(e) {
                let {
                    chat: t,
                    currency: a,
                    priceMap: r,
                    orderItems: o,
                    orderSubtotal: i,
                    additionalCharges: u,
                    flatAmounts: g,
                    onBack: h,
                    onSubmit: b,
                    onAddItem: S,
                    onDeleteItem: _,
                    onPriceChange: C,
                    onAdditionalCharges: T,
                    onItemQuantityChange: P,
                    entryPoint: x = null,
                    onDeclineOrder: k = null
                } = e;
                const [D, A] = (0, R.useState)(z);
                (0, R.useEffect)((() => {
                    const e = () => {
                        const e = d.CTWADataSharingModel.getValue() === n.ENUM_FALSE_NOTSET_TRUE.true;
                        A(e)
                    };
                    return d.CTWADataSharingModel.subscribeForUpdates(e), () => {
                        d.CTWADataSharingModel.unsubscribeFromUpdates(e)
                    }
                }), []);
                const j = o.every((e => {
                        var t;
                        return Number.isInteger(null !== (t = e.price) && void 0 !== t ? t : r[e.id])
                    })),
                    F = 0 !== o.length;
                return R.default.createElement(c.default, null, R.default.createElement(m.DrawerHeader, {
                    title: (0, l.isOrderContentOptimizationEnabled)() ? I.fbt._("Charge buyer", null, {
                        hk: "35xdGE"
                    }) : I.fbt._("Create order", null, {
                        hk: "3snLWG"
                    }),
                    onBack: h,
                    type: m.DRAWER_HEADER_TYPE.SMALL
                }), R.default.createElement(f.default, null, R.default.createElement(p.default, {
                    xstyle: [L.orderItemsContainer, w.uiPadding.top20, w.uiMargin.bottom0],
                    theme: "refresh-padding-title"
                }, R.default.createElement(v.default, null, R.default.createElement(y.default, {
                    sellerWid: (0, N.getMeUser)(),
                    orderStatus: R.default.createElement(O.default, null)
                }), R.default.createElement(E.default, {
                    currency: a,
                    priceMap: r,
                    items: o,
                    onDeleteItem: _,
                    onPriceChange: C,
                    onAddItem: S,
                    onItemQuantityChange: P
                }), R.default.createElement(W, {
                    tax: g.tax,
                    discount: g.discount,
                    shipping: g.shipping,
                    currency: a,
                    subtotal: i,
                    additionalCharges: u,
                    canDisplayAdditionalCharges: F,
                    canChangeAdditionalCharges: F,
                    onAdditionalCharges: T
                })), U(t, o.length, D, (() => A(!D)))), R.default.createElement(p.default, null, R.default.createElement(M.OrderTotalPrice, {
                    xstyle: w.uiPadding.all16,
                    visible: F,
                    disabled: !j,
                    testid: "send-order-button",
                    totalPrice: (0, s.formatAmount1000)(a, g.total),
                    title: I.fbt._("Total", null, {
                        hk: "qKqct"
                    }),
                    onConfirm: () => q(t, D, b),
                    confirmTitle: (0, l.isOrderContentOptimizationEnabled)() ? I.fbt._("Charge buyer", null, {
                        hk: "3H9vTK"
                    }) : I.fbt._("Send Order", null, {
                        hk: "dGwCV"
                    }),
                    error: B(j, g.total, a, t),
                    entryPoint: x,
                    onDeclineOrder: k
                }))))
            }, t.OrderValues = W, t.maybeShowDialogOnSubmit = t.getErrorLabel = t.getDataSharing = void 0;
            var n = a(887341),
                l = a(72696),
                o = a(738501),
                i = r(a(196554)),
                u = r(a(883891)),
                d = a(317285),
                s = a(27578),
                c = r(a(908081)),
                f = r(a(324093)),
                m = a(626194),
                p = r(a(969358)),
                g = a(690495),
                h = a(114850),
                b = r(a(936734)),
                E = r(a(453823)),
                S = a(238977),
                v = r(a(535407)),
                y = r(a(210762)),
                _ = r(a(496254)),
                O = r(a(697944)),
                C = r(a(392432)),
                T = r(a(207992)),
                P = a(272493),
                M = a(208160),
                x = r(a(682212)),
                k = a(180519),
                w = a(676345),
                D = a(94872),
                N = a(459857),
                A = r(a(53575)),
                I = a(548360),
                R = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = F(t);
                    if (a && a.has(e)) return a.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, l, o) : r[l] = e[l]
                        }
                    r.default = e, a && a.set(e, r);
                    return r
                }(a(667294)),
                j = r(a(156720));

            function F(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (F = function(e) {
                    return e ? a : t
                })(e)
            }
            const L = {
                    orderFieldsContainer: {
                        gap: "sxkbojvh"
                    },
                    orderItemsContainer: {
                        flexShrink: "m0h2a7mj",
                        overflowY: "ag5g9lrv"
                    }
                },
                B = (e, t, a, r) => {
                    if (!e) return I.fbt._("Items must all have a price", null, {
                        hk: "1PvX8G"
                    }).toString();
                    const n = 1e3 * (0, l.orderDetailsTotalOrderMinimumValue)(),
                        o = 1e3 * (0, l.orderDetailsTotalMaxValue)(r);
                    return t <= n ? I.fbt._("Total must be more than {order_min_allowed_amount}", [I.fbt._param("order_min_allowed_amount", (0, s.formatAmount1000)(a, n))], {
                        hk: "1TzgFB"
                    }).toString() : t > o ? I.fbt._("Total cannot be more than {order_max_allowed_amount}", [I.fbt._param("order_max_allowed_amount", (0, s.formatAmount1000)(a, o))], {
                        hk: "2eOboQ"
                    }).toString() : null
                };

            function W(e) {
                let {
                    tax: t,
                    discount: a,
                    shipping: r,
                    currency: n,
                    subtotal: l,
                    additionalCharges: o,
                    canDisplayAdditionalCharges: u,
                    canChangeAdditionalCharges: d,
                    onAdditionalCharges: c
                } = e;
                const f = (null == o ? void 0 : o.discountText) && o.discountType === S.PERCENTAGE_SYMBOL ? I.fbt._("{discount_percent}% off", [I.fbt._param("discount_percent", o.discountText)], {
                        hk: "4yt64k"
                    }) : null,
                    m = (null == o ? void 0 : o.taxText) && o.taxType === S.PERCENTAGE_SYMBOL ? I.fbt._("({tax_percent}%)", [I.fbt._param("tax_percent", o.taxText)], {
                        hk: "WGDBi"
                    }) : null;
                return R.default.createElement(g.FlexColumn, {
                    align: "stretch",
                    xstyle: [L.orderFieldsContainer, w.uiPadding.horiz16, w.uiPadding.bottom20]
                }, R.default.createElement(g.FlexRow, {
                    justify: "all",
                    testid: "order-details-subtotal-row"
                }, R.default.createElement(k.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, I.fbt._("Subtotal", null, {
                    hk: "3XD55n"
                })), R.default.createElement(k.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, (0, s.formatAmount1000)(n, l))), Boolean(u) && R.default.createElement(R.default.Fragment, null, null != a && R.default.createElement(g.FlexRow, {
                    justify: "all",
                    testid: "order-details-discount-row"
                }, R.default.createElement(k.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, I.fbt._("Discount", null, {
                    hk: "1ZzkHY"
                }), " ", f), R.default.createElement(k.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, (0, s.formatAmount1000)(n, -a))), null != r && R.default.createElement(g.FlexRow, {
                    justify: "all",
                    testid: "order-details-shipping-row"
                }, R.default.createElement(k.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, I.fbt._("Shipping", null, {
                    hk: "1pvvuy"
                })), R.default.createElement(k.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, (0, s.formatAmount1000)(n, r))), null != t && R.default.createElement(g.FlexRow, {
                    justify: "all",
                    testid: "order-details-tax-row"
                }, R.default.createElement(k.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, I.fbt._("Tax", null, {
                    hk: "OjxE4"
                }), " ", m), R.default.createElement(k.TextSpan, {
                    color: "secondary",
                    size: "16"
                }, (0, s.formatAmount1000)(n, t))), Boolean(d) && R.default.createElement(g.FlexRow, {
                    justify: "all",
                    align: "center"
                }, R.default.createElement(i.default, {
                    onClick: () => null == c ? void 0 : c(),
                    testid: "order-details-additional-charges-button",
                    className: (0, j.default)(_.default.clickableText, w.uiMargin.bottom0)
                }, R.default.createElement("span", null, I.fbt._("Add discount, shipping or tax", null, {
                    hk: "3GTNs0"
                }))))))
            }
            t.getErrorLabel = B;
            const U = (e, t, a, r) => {
                if (u.default.shouldDisplayDataSharingOrderOptOutOrUpsell(e, "order-create", t)) return R.default.createElement(b.default, {
                    checkboxValue: a,
                    onCheckboxToggle: r,
                    theme: "order-create"
                })
            };
            t.getDataSharing = U;
            const z = () => d.CTWADataSharingModel.getValue() === n.ENUM_FALSE_NOTSET_TRUE.true,
                q = (e, t, a) => {
                    if (!(!(0, P.isOrderExpansionEnabled)() && (0, P.isSellerCountrySameAsBuyer)(e) || (0, P.isContactCountrySupported)(e))) return void h.ModalManager.open(R.default.createElement(T.default, {
                        chat: e
                    }));
                    const r = () => {
                        x.default.markOrderAsCreatedAction(e, t), a()
                    };
                    !0 !== A.default.get(D.KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED) && (0, l.inOrderMessagesEphemeralExceptionEnabled)() && (0, o.isEphemeralSettingOn)(e) ? h.ModalManager.open(R.default.createElement(C.default, {
                        chat: e,
                        onSubmit: r
                    })) : r()
                };
            t.maybeShowDialogOnSubmit = q
        },
        208160: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OrderApplyChangesButton = m, t.OrderDeclineButton = p, t.OrderTotalPrice = function(e) {
                let {
                    title: t,
                    xstyle: a,
                    visible: r,
                    disabled: n,
                    totalPrice: l,
                    confirmTitle: o,
                    testid: u,
                    onConfirm: d,
                    error: g = null,
                    entryPoint: h = null,
                    onDeclineOrder: b = null
                } = e;
                return r ? s.default.createElement(i.TextDiv, {
                    xstyle: a
                }, null == g ? s.default.createElement("div", {
                    className: (0, c.default)(f.priceContainer)
                }, t, s.default.createElement("p", null, l)) : s.default.createElement(i.TextDiv, {
                    color: "danger",
                    size: "16",
                    xstyle: f.errorLabel
                }, g), s.default.createElement(m, {
                    title: o,
                    onClick: d,
                    disabled: n || Boolean(g),
                    testid: u
                }), s.default.createElement(p, {
                    entryPoint: h,
                    onClick: b
                })) : null
            };
            var n = r(a(120162)),
                l = r(a(692629)),
                o = a(272493),
                i = a(180519),
                u = a(676345),
                d = a(548360),
                s = r(a(667294)),
                c = r(a(156720));
            const f = {
                buttonWrapper: {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    alignItems: "gndfcl4n"
                },
                priceContainer: {
                    display: "p357zi0d",
                    flexDirection: "sap93d0t",
                    justifyContent: "o4u7okr9",
                    fontWeight: "nbipi2bn"
                },
                errorLabel: {
                    textAlign: "qfejxiq4"
                }
            };

            function m(e) {
                let {
                    title: t,
                    disabled: a,
                    onClick: r,
                    testid: n
                } = e;
                return s.default.createElement("div", {
                    className: (0, c.default)(f.buttonWrapper, u.uiMargin.top16)
                }, s.default.createElement(l.default, {
                    type: "primary",
                    disabled: a,
                    onClick: r,
                    testid: n
                }, t))
            }

            function p(e) {
                let {
                    entryPoint: t = null,
                    onClick: a = null
                } = e;
                return t === n.default.FROM_CART && null != a && (0, o.isOrderExpansionEnabled)() ? s.default.createElement("div", {
                    className: (0, c.default)(f.buttonWrapper, u.uiMargin.top16)
                }, s.default.createElement(l.default, {
                    type: "secondary",
                    onClick: a,
                    testid: "decline-cart-order-button"
                }, d.fbt._("Decline cart", null, {
                    hk: "4dIEiB"
                }))) : null
            }
        },
        407284: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    onClick: t,
                    label: a,
                    PrefixIcon: r,
                    PostfixIcon: s,
                    xstyle: c
                } = e, f = "padded-svg" === e.iconTheme, m = [d.iconSvg, f ? d.paddedSvg : l.uiPadding.all4], p = {
                    width: f ? 20 : 16,
                    height: f ? 20 : 16
                };
                return i.default.createElement(o.default, {
                    xstyle: [d.container, l.uiPadding.vert8, l.uiPadding.horiz12, null != r && l.uiPadding.start36, null != s && l.uiPadding.end36, c],
                    onClick: t,
                    "aria-label": e["aria-label"]
                }, r && i.default.createElement(r, (0, n.default)({
                    xstyle: [d.icon, d.prefixIcon, l.uiMargin.start5],
                    iconXstyle: m
                }, p)), i.default.createElement("div", {
                    className: (0, u.default)(d.content)
                }, a), s && i.default.createElement(s, (0, n.default)({
                    xstyle: [d.icon, l.uiMargin.start5],
                    iconXstyle: m
                }, p)))
            };
            var n = r(a(967154)),
                l = a(676345),
                o = r(a(625903)),
                i = r(a(667294)),
                u = r(a(156720));
            const d = {
                container: {
                    position: "g0rxnol2",
                    color: "nuiuantz",
                    backgroundColor: "jvy3y6qh",
                    borderTopStartRadius: "g130k69c",
                    borderTopEndRadius: "k1a7joe8",
                    borderBottomEndRadius: "dc5qina8",
                    borderBottomStartRadius: "kfr1vweg"
                },
                content: {
                    display: "l7jjieqr"
                },
                icon: {
                    display: "l7jjieqr",
                    position: "lhggkp7q",
                    right: "rsmgdaqi",
                    top: "mvf5n2qr"
                },
                iconSvg: {
                    color: "nuiuantz"
                },
                prefixIcon: {
                    left: "lidbxt4q"
                },
                paddedSvg: {
                    paddingTop: "qbqilfqo",
                    paddingEnd: "iqx13udk",
                    paddingBottom: "a15vwmim",
                    paddingStart: "qiohso4h"
                }
            }
        },
        712187: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AddItemIcon = function(e) {
                var t;
                const {
                    iconXstyle: a,
                    height: r,
                    width: s,
                    viewBox: c
                } = e, f = (0, l.default)(e, d);
                let m;
                if (c) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: a = 0,
                        height: r = 0
                    } = c;
                    m = [e, t, a, r].join(" ")
                }
                let p = 20,
                    g = 20;
                null == r && null == s || (p = r, g = s);
                return u.default.createElement(o.BaseSvgSpan, (0, n.default)({
                    name: "add-item"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 20 20",
                    height: p,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(a),
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    enableBackground: "new 0 0 24 24"
                }, u.default.createElement("path", {
                    fill: "currentColor",
                    d: "M10 5C9.45 5 9 5.45 9 6V9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H9V14C9     14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14     9H11V6C11 5.45 10.55 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52     20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18     10C18 14.41 14.41 18 10 18Z"
                })))
            };
            var n = r(a(967154)),
                l = r(a(506479)),
                o = a(220584),
                i = r(a(156720)),
                u = r(a(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"]
        },
        166706: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LocalShippingIcon = function(e) {
                var t;
                const {
                    iconXstyle: a,
                    height: r,
                    width: s,
                    viewBox: c
                } = e, f = (0, l.default)(e, d);
                let m;
                if (c) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: a = 0,
                        height: r = 0
                    } = c;
                    m = [e, t, a, r].join(" ")
                }
                let p = 8,
                    g = 12;
                null == r && null == s || (p = r, g = s);
                return u.default.createElement(o.BaseSvgSpan, (0, n.default)({
                    name: "local-shipping"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 12 8",
                    height: p,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(a),
                    fill: "none"
                }, u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.5 2H9.75C9.905 2 10.055 2.075 10.15 2.2L11.3 3.735C11.43 3.91 11.5 4.12 11.5 4.335V6C11.5 6.275 11.275 6.5 11 6.5H10.5C10.5 7.33 9.83 8 9 8C8.17 8 7.5 7.33 7.5 6.5H4.5C4.5 7.33 3.83 8 3 8C2.17 8 1.5 7.33 1.5 6.5C0.95 6.5 0.5 6.05 0.5 5.5V1C0.5 0.45 0.95 0 1.5 0H7.5C8.05 0 8.5 0.45 8.5 1V2ZM2.5 6.5C2.5 6.775 2.725 7 3 7C3.275 7 3.5 6.775 3.5 6.5C3.5 6.225 3.275 6 3 6C2.725 6 2.5 6.225 2.5 6.5ZM9.75 2.75L10.73 4H8.5V2.75H9.75ZM8.5 6.5C8.5 6.775 8.725 7 9 7C9.275 7 9.5 6.775 9.5 6.5C9.5 6.225 9.275 6 9 6C8.725 6 8.5 6.225 8.5 6.5Z",
                    fill: "#667781"
                })))
            };
            var n = r(a(967154)),
                l = r(a(506479)),
                o = a(220584),
                i = r(a(156720)),
                u = r(a(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"]
        },
        468427: (e, t, a) => {
            "use strict";
            var r = a(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StatusClockIcon = function(e) {
                var t;
                const {
                    iconXstyle: a,
                    height: r,
                    width: s,
                    viewBox: c
                } = e, f = (0, l.default)(e, d);
                let m;
                if (c) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: a = 0,
                        height: r = 0
                    } = c;
                    m = [e, t, a, r].join(" ")
                }
                let p = 20,
                    g = 20;
                null == r && null == s || (p = r, g = s);
                return u.default.createElement(o.BaseSvgSpan, (0, n.default)({
                    name: "status-clock"
                }, f), u.default.createElement("svg", {
                    viewBox: null !== (t = m) && void 0 !== t ? t : "0 0 20 20",
                    height: p,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(a),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9.78 5H9.72C9.32 5 9 5.32 9 5.72V10.44C9 10.79 9.18 11.12 9.49 11.3L13.64 13.79C13.98 13.99 14.42 13.89 14.62 13.55C14.83 13.21 14.72 12.76 14.37 12.56L10.5 10.26V5.72C10.5 5.32 10.18 5 9.78 5Z",
                    fill: "currentColor"
                })))
            };
            var n = r(a(967154)),
                l = r(a(506479)),
                o = a(220584),
                i = r(a(156720)),
                u = r(a(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"]
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_low_priority_components~.22c4346fc652fdc4eb79.js.map