import React from "react";

// Definition of the ApplicationRoute interface
export interface ApplicationRoute {
    readonly id: string;
    readonly path: string;
    readonly element: any;    
  }