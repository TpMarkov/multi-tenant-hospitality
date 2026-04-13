(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/store/useStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/store/useAdminStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdminStore",
    ()=>useAdminStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
'use client';
;
;
const useAdminStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/store/useAdminStore.js [app-client] (ecmascript)");
;
;
// Guest API (no auth)
const api = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:3000/api/v1") || 'http://localhost:5000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});
const adminApi = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:3000/api/v1") || 'http://localhost:5000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});
// Inject JWT from store on every request
adminApi.interceptors.request.use((config)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminStore"].getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// Auto-logout on 401
adminApi.interceptors.response.use((res)=>res, (error)=>{
    if (error.response?.status === 401) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminStore"].getState().logout();
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.href = '/admin/login';
        }
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatPrice",
    ()=>formatPrice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MenuItem({ item }) {
    _s();
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "MenuItem.useStore[addToCart]": (state)=>state.addToCart
    }["MenuItem.useStore[addToCart]"]);
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAdd = ()=>{
        setAdding(true);
        addToCart({
            menuItemId: item._id,
            name: item.name,
            price: item.price,
            quantity: 1,
            specialInstructions: ""
        });
        setTimeout(()=>setAdding(false), 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:border-slate-300 transition-all group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 pr-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500 line-clamp-2 mt-1 leading-relaxed",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 font-bold text-slate-900",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(item.price)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 bg-slate-100 rounded-xl overflow-hidden relative flex-shrink-0",
                        children: item.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.imageUrl,
                            alt: item.name,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl",
                            children: item.name[0]
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAdd,
                        disabled: !item.isAvailable || adding,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 p-2 rounded-full transition-all duration-300 scale-100 active:scale-90", adding ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-black", !item.isAvailable && "bg-slate-200 cursor-not-allowed text-slate-400"),
                        children: adding ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                            lineNumber: 59,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(MenuItem, "LtXqyMf0ZRm8+S45h5Z7swQWAqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = MenuItem;
var _c;
__turbopack_context__.k.register(_c, "MenuItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuList.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$menu$2f$MenuItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuItem.jsx [app-client] (ecmascript)");
"use client";
;
;
function MenuList({ category, items }) {
    if (items.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: `category-${category._id}`,
        className: "scroll-mt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-4 text-slate-800",
                children: category.name
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuList.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$menu$2f$MenuItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: item
                    }, item._id, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuList.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuList.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuList.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = MenuList;
var _c;
__turbopack_context__.k.register(_c, "MenuList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/CategoryNav.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CategoryNav({ categories }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(categories[0]?._id);
    const scrollToCategory = (id)=>{
        setActive(id);
        const el = document.getElementById(`category-${id}`);
        if (el) {
            const offset = 120; // header height + nav height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-[73px] z-10 bg-white border-b flex overflow-x-auto no-scrollbar py-2 px-4 gap-4",
        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>scrollToCategory(cat._id),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors", active === cat._id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"),
                children: cat.name
            }, cat._id, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/CategoryNav.jsx",
                lineNumber: 29,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/CategoryNav.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(CategoryNav, "DOrt80K/Sco7xp1LjaaoMNr5CZA=");
_c = CategoryNav;
var _c;
__turbopack_context__.k.register(_c, "CategoryNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartSticky
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CartSticky() {
    _s();
    const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "CartSticky.useStore[cart]": (state)=>state.cart
    }["CartSticky.useStore[cart]"]);
    const { propertyId, roomId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const totalItems = cart.reduce((acc, item)=>acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item)=>acc + item.price * item.quantity, 0);
    if (totalItems === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 left-0 right-0 px-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/property/${propertyId}/room/${roomId}/checkout`,
            className: "flex items-center justify-between bg-black text-white px-6 py-4 rounded-3xl shadow-2xl hover:bg-slate-800 transition-colors group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-black",
                                    children: totalItems
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-lg",
                            children: "View Cart"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-400 font-medium",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-lg",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(totalPrice)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(CartSticky, "ovE7Awm4UZTE+MuQpPAxmou+Pbk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CartSticky;
var _c;
__turbopack_context__.k.register(_c, "CartSticky");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$menu$2f$MenuList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/MenuList.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$menu$2f$CategoryNav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/menu/CategoryNav.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$cart$2f$CartSticky$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/components/cart/CartSticky.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function MenuPage() {
    _s();
    const { propertyId, roomId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const setSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "MenuPage.useStore[setSession]": (state)=>state.setSession
    }["MenuPage.useStore[setSession]"]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuPage.useEffect": ()=>{
            if (propertyId && roomId) {
                setSession(propertyId, roomId);
                fetchData();
            }
        }
    }["MenuPage.useEffect"], [
        propertyId,
        roomId
    ]);
    const fetchData = async ()=>{
        try {
            setLoading(true);
            const [catRes, itemRes] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategories"])(propertyId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMenuItems"])(propertyId)
            ]);
            setCategories(catRes.data.data);
            setItems(itemRes.data.data);
        } catch (err) {
            console.error(err);
            setError("Failed to load menu. Please check your connection.");
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-8 w-8 animate-spin text-blue-600"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen flex-col items-center justify-center p-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 mb-4",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: fetchData,
                    className: "bg-blue-600 text-white px-6 py-2 rounded-full font-medium",
                    children: "Retry"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white p-4 sticky top-0 z-10 border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-slate-900 leading-tight",
                        children: "Room Dining"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: [
                            "Room ",
                            roomId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$menu$2f$CategoryNav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                categories: categories
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-8",
                children: [
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$menu$2f$MenuList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            category: category,
                            items: items.filter((item)=>item.categoryId && (item.categoryId._id === category._id || item.categoryId === category._id))
                        }, category._id, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)),
                    items.filter((item)=>!item.categoryId).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$menu$2f$MenuList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        category: {
                            _id: 'uncategorized',
                            name: 'Other Options'
                        },
                        items: items.filter((item)=>!item.categoryId)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                        lineNumber: 85,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$components$2f$cart$2f$CartSticky$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/room-service/multi-tenant-hospitality/client/app/(guest)/property/[propertyId]/room/[roomId]/page.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(MenuPage, "3o2I4tfWOwG6KwZZpbj9mZeOIwQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$room$2d$service$2f$multi$2d$tenant$2d$hospitality$2f$client$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = MenuPage;
var _c;
__turbopack_context__.k.register(_c, "MenuPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=0pip_ects-for-portfolio-versions_room-service_multi-tenant-hospitality_client_00iv1xo._.js.map