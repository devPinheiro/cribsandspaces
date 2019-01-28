import { USER_ROLE, ADMIN_ROLE, SUPER_ADMIN_ROLE } from "../resources/user/user.model";

export const isUser = (req, res, next) => {
    if (req.user.role !== USER_ROLE) {
        return res.json({ err: "unauthorized, not a user. Sign up" });
    }
    next();
};

export const isAdmin = (req, res, next) => {
    if(req.user.role !== ADMIN_ROLE){
        return res.json({err: "unauthorized, not an admin"});
    }
    next();
};

export const isSuperAdmin = (req, res, next) => {
    if (req.user.role !== SUPER_ADMIN_ROLE) {
        return res.json({ err: "unauthorized, not a super admin" });
    }
    next();
};
