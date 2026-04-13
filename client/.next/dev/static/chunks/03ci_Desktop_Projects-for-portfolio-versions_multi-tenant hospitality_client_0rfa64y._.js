(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getProperties",
    ()=>getProperties,
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
    "updateRoom",
    ()=>updateRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/store/useAdminStore.js [app-client] (ecmascript)");
;
;
// Guest API (no auth)
const api = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || "http://localhost:5000/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});
const adminApi = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || "http://localhost:5000/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});
// Inject JWT from store on every request
adminApi.interceptors.request.use((config)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminStore"].getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// Auto-logout on 401
adminApi.interceptors.response.use((res)=>res, (error)=>{
    if (error.response?.status === 401) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminStore"].getState().logout();
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.href = "/admin/login";
        }
    }
    return Promise.reject(error);
});
const getCategories = (propertyId)=>api.get(`/menu/categories?propertyId=${propertyId}`);
const getMenuItems = (propertyId)=>api.get(`/menu/items?propertyId=${propertyId}`);
const createOrder = (orderData)=>api.post("/orders", orderData);
const loginAdmin = (credentials)=>api.post("/auth/login", credentials);
const getOrders = (propertyId)=>adminApi.get(`/orders?propertyId=${propertyId}`);
const updateOrderStatus = (id, status)=>adminApi.patch(`/orders/${id}/status`, {
        status
    });
const getProperties = ()=>adminApi.get("/properties");
const createCategory = (data)=>adminApi.post("/menu/categories", data);
const createMenuItem = (data)=>adminApi.post("/menu/items", data);
const updateMenuItem = (id, data)=>adminApi.patch(`/menu/items/${id}`, data);
const deleteMenuItem = (id)=>adminApi.delete(`/menu/items/${id}`);
const updateMenuItemAvailability = (id, isAvailable)=>adminApi.patch(`/menu/items/${id}/availability`, {
        isAvailable
    });
const getRooms = (propertyId)=>adminApi.get(`/rooms?propertyId=${propertyId}`);
const createRoom = (data)=>adminApi.post("/rooms", data);
const updateRoom = (id, data)=>adminApi.patch(`/rooms/${id}`, data);
const deleteRoom = (id)=>adminApi.delete(`/rooms/${id}`);
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/store/useAdminStore.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MenuPage() {
    _s();
    const { propertyId, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminStore"])();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCategoryModal, setShowCategoryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showItemModal, setShowItemModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [itemSaving, setItemSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedPropertyId, setSelectedPropertyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoryForm, setCategoryForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        propertyId: ""
    });
    const [itemForm, setItemForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        price: "",
        categoryId: "",
        imageUrl: "",
        propertyId: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuPage.useEffect": ()=>{
            if (propertyId || selectedPropertyId) {
                loadData();
            }
        }
    }["MenuPage.useEffect"], [
        propertyId,
        selectedPropertyId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuPage.useEffect": ()=>{
            if (user?.role === "super_admin") {
                fetchProperties();
            }
        }
    }["MenuPage.useEffect"], [
        user
    ]);
    const loadData = async ()=>{
        const effectivePropertyId = propertyId || selectedPropertyId;
        setLoading(true);
        try {
            const [categoriesRes, itemsRes] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategories"])(effectivePropertyId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMenuItems"])(effectivePropertyId)
            ]);
            setCategories(categoriesRes.data.data);
            setItems(itemsRes.data.data);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load menu data");
        } finally{
            setLoading(false);
        }
    };
    const fetchProperties = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProperties"])();
            setProperties(res.data.data);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load properties");
        }
    };
    const handleCreateCategory = async ()=>{
        if (!categoryForm.name.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Category name is required");
            return;
        }
        if (user?.role === "super_admin" && !categoryForm.propertyId && !selectedPropertyId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Property is required");
            return;
        }
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCategory"])({
                name: categoryForm.name,
                propertyId: user?.role === "super_admin" ? categoryForm.propertyId || selectedPropertyId : propertyId
            });
            setCategories((prev)=>[
                    ...prev,
                    res.data.data
                ]);
            setCategoryForm({
                name: "",
                propertyId: ""
            });
            setShowCategoryModal(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Category created!");
        } catch (err) {
            console.error("Create category error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.response?.data?.error || "Failed to create category");
        }
    };
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event)=>{
            const base64 = event.target?.result;
            setImagePreview(base64);
            setItemForm((prev)=>({
                    ...prev,
                    imageUrl: base64
                }));
        };
        reader.readAsDataURL(file);
    };
    const handleCreateOrUpdateItem = async ()=>{
        if (!itemForm.name.trim() || !itemForm.price) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fill in all fields");
            return;
        }
        if (user?.role === "super_admin" && !itemForm.propertyId && !selectedPropertyId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Property is required");
            return;
        }
        setItemSaving(true);
        try {
            const payload = {
                name: itemForm.name,
                description: itemForm.description,
                price: parseFloat(itemForm.price),
                categoryId: itemForm.categoryId || null,
                imageUrl: itemForm.imageUrl,
                propertyId: user?.role === "super_admin" ? itemForm.propertyId || selectedPropertyId : propertyId
            };
            if (editingItem) {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMenuItem"])(editingItem._id, payload);
                setItems((prev)=>prev.map((i)=>i._id === editingItem._id ? res.data.data : i));
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Menu item updated!");
            } else {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuItem"])(payload);
                setItems((prev)=>[
                        ...prev,
                        res.data.data
                    ]);
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Menu item created!");
            }
            resetForm();
            setShowItemModal(false);
        } catch (err) {
            console.error("Item operation error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.response?.data?.error || (editingItem ? "Failed to update item" : "Failed to create item"));
        } finally{
            setItemSaving(false);
        }
    };
    const handleEditItem = (item)=>{
        setEditingItem(item);
        setItemForm({
            name: item.name,
            description: item.description,
            price: item.price.toString(),
            categoryId: item.categoryId._id || item.categoryId,
            imageUrl: item.imageUrl || "",
            propertyId: item.propertyId || ""
        });
        setImagePreview(item.imageUrl || "");
        setShowItemModal(true);
    };
    const handleDeleteItem = async (id)=>{
        if (confirm("Are you sure you want to delete this item?")) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteMenuItem"])(id);
                setItems((prev)=>prev.filter((i)=>i._id !== id));
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Item deleted!");
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete item");
            }
        }
    };
    const toggleAvailability = async (item)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMenuItemAvailability"])(item._id, !item.isAvailable);
            setItems((prev)=>prev.map((i)=>i._id === item._id ? {
                        ...i,
                        isAvailable: !i.isAvailable
                    } : i));
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update availability");
        }
    };
    const getCategoryName = (categoryId)=>{
        const cat = categories.find((c)=>c._id === (categoryId?._id || categoryId));
        return cat?.name || "—";
    };
    const resetForm = ()=>{
        setEditingItem(null);
        setItemForm({
            name: "",
            description: "",
            price: "",
            categoryId: "",
            imageUrl: "",
            propertyId: ""
        });
        setImagePreview("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-6",
                        children: "Menu Management"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    user?.role === "super_admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-2",
                                children: "Select Property"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedPropertyId,
                                onChange: (e)=>setSelectedPropertyId(e.target.value),
                                className: "border border-gray-300 rounded px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Property"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    properties.map((prop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: prop._id,
                                            children: prop.name
                                        }, prop._id, false, {
                                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowCategoryModal(true),
                                className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
                                children: "Add Category"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    resetForm();
                                    setShowItemModal(true);
                                },
                                className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                                children: "Add Menu Item"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-100 border-b",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Price"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Image"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Available"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2 text-sm text-gray-600",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2",
                                                    children: getCategoryName(item.categoryId)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2",
                                                    children: [
                                                        "$",
                                                        item.price.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2",
                                                    children: item.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.imageUrl,
                                                        alt: item.name,
                                                        className: "w-10 h-10 rounded object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                        lineNumber: 292,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400 text-sm",
                                                        children: "No image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                        lineNumber: 298,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleAvailability(item),
                                                        className: `px-2 py-1 rounded text-sm ${item.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                                                        children: item.isAvailable ? "Available" : "Unavailable"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                        lineNumber: 302,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                    lineNumber: 301,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleEditItem(item),
                                                            className: "text-blue-600 hover:text-blue-800 mr-3",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                            lineNumber: 314,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteItem(item._id),
                                                            className: "text-red-600 hover:text-red-800",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                            lineNumber: 320,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                                    lineNumber: 313,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item._id, true, {
                                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            showCategoryModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg w-96",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Add Category"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 338,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: categoryForm.name,
                            onChange: (e)=>setCategoryForm((prev)=>({
                                        ...prev,
                                        name: e.target.value
                                    })),
                            placeholder: "Category name",
                            className: "w-full border border-gray-300 rounded px-3 py-2 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this),
                        user?.role === "super_admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: categoryForm.propertyId,
                            onChange: (e)=>setCategoryForm((prev)=>({
                                        ...prev,
                                        propertyId: e.target.value
                                    })),
                            className: "w-full border border-gray-300 rounded px-3 py-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select Property"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 352,
                                    columnNumber: 17
                                }, this),
                                properties.map((prop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: prop._id,
                                        children: prop.name
                                    }, prop._id, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                        lineNumber: 354,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 347,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCategoryModal(false),
                                    className: "px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateCategory,
                                    className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                                    children: "Create"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                    lineNumber: 337,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                lineNumber: 336,
                columnNumber: 9
            }, this),
            showItemModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg w-96 max-h-96 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: editingItem ? "Edit Menu Item" : "Add Menu Item"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: itemForm.name,
                            onChange: (e)=>setItemForm({
                                    ...itemForm,
                                    name: e.target.value
                                }),
                            placeholder: "Item name",
                            className: "w-full border border-gray-300 rounded px-3 py-2 mb-3"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: itemForm.description,
                            onChange: (e)=>setItemForm({
                                    ...itemForm,
                                    description: e.target.value
                                }),
                            placeholder: "Description",
                            className: "w-full border border-gray-300 rounded px-3 py-2 mb-3",
                            rows: "2"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            value: itemForm.price,
                            onChange: (e)=>setItemForm({
                                    ...itemForm,
                                    price: e.target.value
                                }),
                            placeholder: "Price",
                            className: "w-full border border-gray-300 rounded px-3 py-2 mb-3",
                            step: "0.01"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: itemForm.categoryId,
                            onChange: (e)=>setItemForm({
                                    ...itemForm,
                                    categoryId: e.target.value
                                }),
                            className: "w-full border border-gray-300 rounded px-3 py-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select Category"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: cat._id,
                                        children: cat.name
                                    }, cat._id, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                        lineNumber: 421,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 412,
                            columnNumber: 13
                        }, this),
                        user?.role === "super_admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: itemForm.propertyId,
                            onChange: (e)=>setItemForm({
                                    ...itemForm,
                                    propertyId: e.target.value
                                }),
                            className: "w-full border border-gray-300 rounded px-3 py-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select Property"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 434,
                                    columnNumber: 17
                                }, this),
                                properties.map((prop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: prop._id,
                                        children: prop.name
                                    }, prop._id, false, {
                                        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                        lineNumber: 436,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 427,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Image"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 443,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/*",
                                    onChange: handleImageChange,
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this),
                                imagePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imagePreview,
                                    alt: "Preview",
                                    className: "w-32 h-32 rounded mt-2 object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 451,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowItemModal(false);
                                        resetForm();
                                    },
                                    className: "px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateOrUpdateItem,
                                    disabled: itemSaving,
                                    className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50",
                                    children: itemSaving ? "Saving..." : editingItem ? "Update" : "Create"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                    lineNumber: 380,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
                lineNumber: 379,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Projects-for-portfolio-versions/multi-tenant hospitality/client/app/admin/menu/page.jsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s(MenuPage, "poxzj0wBzQ53vB6+ZQto8JSsed4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Projects$2d$for$2d$portfolio$2d$versions$2f$multi$2d$tenant__hospitality$2f$client$2f$store$2f$useAdminStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminStore"]
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

//# sourceMappingURL=03ci_Desktop_Projects-for-portfolio-versions_multi-tenant%20hospitality_client_0rfa64y._.js.map