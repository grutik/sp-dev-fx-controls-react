/// <reference types="react" />
import * as React from 'react';
import { ICssInput } from 'office-ui-fabric-react/lib/Utilities';
/**
 * base properties for field renderes
 */
export interface IFieldRendererProps {
    /**
     * CSS styles to apply to the renderer
     */
    cssProps?: React.CSSProperties;
    /**
     * CSS classes to apply to the renderer
     */
    className?: ICssInput;
}
