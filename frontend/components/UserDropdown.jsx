"use client";

import { UserButton } from "@clerk/nextjs";
import { Cookie, RefrigeratorIcon } from "lucide-react";
import React from "react";

const UserDropdown = () => {
    return (
        <UserButton>
            <UserButton.MenuItems>
                <UserButton.Link label="My Recipes" labelIcon={<Cookie size={16} />} href="/recipes" />
                <UserButton.Link label="My Pantry" labelIcon={<RefrigeratorIcon size={16} />} href="/pantry" />
                <UserButton.Action label="manageAccount" />
            </UserButton.MenuItems>
        </UserButton>
    );
};

export default UserDropdown;