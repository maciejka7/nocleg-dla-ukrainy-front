import React from "react";

export interface NavigationItem {

        linkTo: string
        linkLabel: string
        isMobile?: boolean
        [x: string]: any
    
}