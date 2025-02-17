import _ from "lodash";

export const returnPaginationRange = (totalPage, page, limit, siblings) => {
    let totalPageNoInArray = 7 + siblings;

    if (totalPageNoInArray >= totalPage) {
        return _.range(1, totalPage + 1);  // ✅ Fixed: Added return statement
    }

    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page + siblings, totalPage);

    let showLeftDots = leftSiblingsIndex > 2;
    let showRightDots = rightSiblingsIndex < totalPage - 2;

    if (!showLeftDots && showRightDots) {
        let leftItemsCount = 3 + 2 * siblings;
        let leftRange = _.range(1, leftItemsCount + 1);
        return [...leftRange, "...", totalPage];  // ✅ Fixed spacing
    } 
    
    if (showLeftDots && !showRightDots) {
        let rightItemsCount = 3 + 2 * siblings;
        let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
        return [1, "...", ...rightRange];  // ✅ Fixed spacing
    }

    let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
    return [1, "...", ...middleRange, "...", totalPage];  // ✅ Fixed spacing
};
