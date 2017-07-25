// Sample for Tree Shaking (https://webpack.js.org/guides/tree-shaking/)

// This function isn't used anywhere
export function square(x) {
    return x * x;
}

// This function gets included
export function cube(x) {
    return x * x * x;
}