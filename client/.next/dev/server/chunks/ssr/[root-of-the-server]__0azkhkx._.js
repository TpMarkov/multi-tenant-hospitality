module.exports = [
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/store/useStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        propertyId: null,
        roomId: null,
        cart: [],
        setSession: (propertyId, roomId)=>set({
                propertyId,
                roomId
            }),
        addToCart: (item)=>set((state)=>{
                // item should have menuItemId, name, price, quantity, specialInstructions
                const existingIndex = state.cart.findIndex((i)=>i.menuItemId === item.menuItemId);
                if (existingIndex > -1) {
                    const newCart = [
                        ...state.cart
                    ];
                    newCart[existingIndex].quantity += item.quantity;
                    // Merge instructions if any? Or keep separate? Usually separate items if different instructions
                    // For simplicity, we assume one entry per menuItemId for now, or you can key by ID + instructions hash
                    return {
                        cart: newCart
                    };
                }
                return {
                    cart: [
                        ...state.cart,
                        item
                    ]
                };
            }),
        removeFromCart: (menuItemId)=>set((state)=>({
                    cart: state.cart.filter((i)=>i.menuItemId !== menuItemId)
                })),
        updateQuantity: (menuItemId, quantity)=>set((state)=>({
                    cart: quantity > 0 ? state.cart.map((i)=>i.menuItemId === menuItemId ? {
                            ...i,
                            quantity
                        } : i) : state.cart.filter((i)=>i.menuItemId !== menuItemId)
                })),
        clearCart: ()=>set({
                cart: []
            })
    }), {
    name: 'guest-dining-store',
    // only persist cart and session
    partialize: (state)=>({
            cart: state.cart,
            propertyId: state.propertyId,
            roomId: state.roomId
        })
}));
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatPrice",
    ()=>formatPrice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/store/useAdminStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdminStore",
    ()=>useAdminStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const useAdminStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        user: null,
        token: null,
        propertyId: null,
        isAuthenticated: false,
        login: (user, token)=>set({
                user,
                token,
                propertyId: user.role === 'super_admin' ? null : user.propertyId,
                isAuthenticated: true
            }),
        logout: ()=>set({
                user: null,
                token: null,
                propertyId: null,
                isAuthenticated: false
            }),
        getToken: ()=>get().token
    }), {
    name: 'admin-auth-store',
    partialize: (state)=>({
            user: state.user,
            token: state.token,
            propertyId: state.propertyId,
            isAuthenticated: state.isAuthenticated
        })
}));
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/lib/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminApi",
    ()=>adminApi,
    "createCategory",
    ()=>createCategory,
    "createMenuItem",
    ()=>createMenuItem,
    "createOrder",
    ()=>createOrder,
    "createRoom",
    ()=>createRoom,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteCategory",
    ()=>deleteCategory,
    "deleteMenuItem",
    ()=>deleteMenuItem,
    "deleteRoom",
    ()=>deleteRoom,
    "getCategories",
    ()=>getCategories,
    "getMenuItems",
    ()=>getMenuItems,
    "getOrders",
    ()=>getOrders,
    "getRoomByNumber",
    ()=>getRoomByNumber,
    "getRooms",
    ()=>getRooms,
    "loginAdmin",
    ()=>loginAdmin,
    "updateMenuItem",
    ()=>updateMenuItem,
    "updateMenuItemAvailability",
    ()=>updateMenuItemAvailability,
    "updateOrderStatus",
    ()=>updateOrderStatus,
    "validateQRSession",
    ()=>validateQRSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/store/useAdminStore.js [app-ssr] (ecmascript)");
;
;
// Guest API (no auth)
const api = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});
const adminApi = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});
// Inject JWT from store on every request
adminApi.interceptors.request.use((config)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAdminStore"].getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// Auto-logout on 401
adminApi.interceptors.response.use((res)=>res, (error)=>{
    if (error.response?.status === 401) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAdminStore"].getState().logout();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    return Promise.reject(error);
});
const getCategories = (propertyId)=>api.get(`/menu/categories?propertyId=${propertyId}`);
const getMenuItems = (propertyId)=>api.get(`/menu/items?propertyId=${propertyId}`);
const validateQRSession = (sessionToken)=>api.get(`/rooms/validate-qr/${sessionToken}`);
const getRoomByNumber = (propertyId, roomNumber, token)=>api.get(`/rooms/by-number/${roomNumber}?propertyId=${propertyId}&token=${token}`);
const createOrder = (orderData)=>api.post('/orders', orderData);
const loginAdmin = (credentials)=>api.post('/auth/login', credentials);
const getOrders = (propertyId)=>adminApi.get(`/orders?propertyId=${propertyId}`);
const updateOrderStatus = (id, status)=>adminApi.patch(`/orders/${id}/status`, {
        status
    });
const createCategory = (data)=>adminApi.post('/menu/categories', data);
const createMenuItem = (data)=>adminApi.post('/menu/items', data);
const updateMenuItem = (id, data)=>adminApi.patch(`/menu/items/${id}`, data);
const updateMenuItemAvailability = (id, isAvailable)=>adminApi.patch(`/menu/items/${id}/availability`, {
        isAvailable
    });
const deleteMenuItem = (id)=>adminApi.delete(`/menu/items/${id}`);
const deleteCategory = (id)=>adminApi.delete(`/menu/categories/${id}`);
const getRooms = (propertyId)=>adminApi.get(`/rooms?propertyId=${propertyId}`);
const createRoom = (data)=>adminApi.post('/rooms', data);
const deleteRoom = (id)=>adminApi.delete(`/rooms/${id}`);
const __TURBOPACK__default__export__ = api;
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/lib/api.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function CheckoutPageContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const sessionToken = searchParams.get("token");
    const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.cart);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.updateQuantity);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.removeFromCart);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])((state)=>state.clearCart);
    const [instructions, setInstructions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roomData, setRoomData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingRoom, setLoadingRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [tokenError, setTokenError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Validate QR session token on page load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const validateSession = async ()=>{
            try {
                if (!sessionToken) {
                    console.error("🔐 [Checkout] No session token provided - invalid QR code");
                    setTokenError(true);
                    setLoadingRoom(false);
                    return;
                }
                console.log("🔍 [Checkout] Validating QR session token:", sessionToken?.substring(0, 10) + "...");
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateQRSession"])(sessionToken);
                console.log("✅ [Checkout] Session validated, room data:", res.data.data);
                setRoomData(res.data.data);
                setTokenError(false);
            } catch (err) {
                console.error("❌ [Checkout] Failed to validate QR session:", err);
                if (err.response?.status === 401 || err.response?.status === 403 || err.response?.status === 404) {
                    setTokenError(true);
                }
            } finally{
                setLoadingRoom(false);
            }
        };
        if (sessionToken) {
            validateSession();
        }
    }, [
        sessionToken
    ]);
    const totalPrice = cart.reduce((acc, item)=>acc + item.price * item.quantity, 0);
    const handlePlaceOrder = async ()=>{
        if (cart.length === 0) return;
        if (!roomData || !roomData.roomId) {
            alert("Room information is still loading. Please wait.");
            return;
        }
        try {
            setLoading(true);
            const orderData = {
                propertyId: roomData.propertyId,
                roomId: roomData.roomId,
                items: cart.map((item)=>({
                        menuItemId: item.menuItemId,
                        quantity: item.quantity
                    })),
                specialInstructions: instructions
            };
            console.log("📦 Order Data Being Sent:", orderData);
            console.log("🏢 Property ID:", roomData.propertyId, "Type:", typeof roomData.propertyId);
            console.log("🚪 Room ID:", roomData.roomId, "Type:", typeof roomData.roomId);
            console.log("📝 Items:", orderData.items);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrder"])(orderData);
            console.log("✅ Order Response:", res);
            if (res.data.success) {
                clearCart();
                console.log("🎉 Order placed successfully:", res.data.data._id);
                router.push(`/checkout/confirmation?orderId=${res.data.data._id}&roomNumber=${roomData.roomNumber}`);
            } else {
                console.error("❌ Order failed:", res.data);
                alert(`Order failed: ${res.data.error || "Unknown error"}`);
            }
        } catch (err) {
            console.error("❌ Error placing order:", err);
            console.error("Error response:", err.response?.data);
            console.error("Error status:", err.response?.status);
            alert(`Failed to place order: ${err.response?.data?.error || err.message || "Please try again."}`);
        } finally{
            setLoading(false);
        }
    };
    if (cart.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-screen items-center justify-center p-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-100 p-6 rounded-full mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                        className: "h-12 w-12 text-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-slate-900 mb-2",
                    children: "Your cart is empty"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 mb-8",
                    children: "Add some delicious items from our menu to get started."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: sessionToken ? `/?token=${sessionToken}` : "/",
                    className: "bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg",
                    children: "View Menu"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
            lineNumber: 145,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white pb-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 bg-white z-10 p-4 border-b flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: sessionToken ? `/?token=${sessionToken}` : "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 -ml-2 rounded-full hover:bg-slate-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold",
                        children: "Your Cart"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            tokenError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 border border-red-200 p-4 m-4 rounded-lg flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-red-900",
                                children: "Invalid QR Code"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-700",
                                children: "This QR code is invalid or has expired. Please ask a staff member for a new one."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                lineNumber: 177,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: cart.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 border-b pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-slate-400 uppercase",
                                        children: item.name[0]
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-slate-900",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(item.price * item.quantity)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                        lineNumber: 200,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 bg-slate-100 rounded-full px-3 py-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.menuItemId, item.quantity - 1),
                                                                className: "p-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold w-4 text-center",
                                                                children: item.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                                lineNumber: 215,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.menuItemId, item.quantity + 1),
                                                                className: "p-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                                lineNumber: 218,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                        lineNumber: 206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeFromCart(item.menuItemId),
                                                        className: "text-red-500 p-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                            lineNumber: 231,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.menuItemId, true, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-bold text-slate-500 uppercase tracking-wider",
                                children: "Special Instructions"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Any allergies or special requests?",
                                value: instructions,
                                onChange: (e)=>setInstructions(e.target.value),
                                className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 min-h-[100px] focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-50 rounded-2xl p-4 space-y-2 border border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Subtotal"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(totalPrice)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Room Service Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Free"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between font-bold text-lg text-slate-900 border-t pt-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(totalPrice)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 p-4 bg-white border-t z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handlePlaceOrder,
                    disabled: loading || loadingRoom || !roomData || tokenError,
                    className: "w-full bg-black text-white h-16 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                    title: tokenError ? "Invalid QR code" : loadingRoom ? "Loading room information..." : "",
                    children: loading || loadingRoom ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-6 w-6 animate-spin text-white"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this),
                            loadingRoom ? "Loading..." : "Placing Order..."
                        ]
                    }, void 0, true) : tokenError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 290,
                                columnNumber: 15
                            }, this),
                            "Invalid QR Code"
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this),
                            "Place Order"
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
function CheckoutPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading checkout..."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
            lineNumber: 307,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutPageContent, {}, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
            lineNumber: 308,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/checkout/[token]/page.jsx",
        lineNumber: 307,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0azkhkx._.js.map