/*
 * Design library index. Module order = tree order.
 * To add a module: create data/modules/<name>.js and list it here. No Explorer code changes needed.
 */
import appFoundation from "./modules/app-foundation.js";
import homeNavigation from "./modules/home-navigation.js";
import authentication from "./modules/authentication.js";
import notifications from "./modules/notifications.js";
import rewards from "./modules/rewards.js";
import membershipCredit from "./modules/membership-credit.js";
import membershipPoints from "./modules/membership-points.js";
import membershipMemberCard from "./modules/membership-member-card.js";
import shopOrdering from "./modules/shop-ordering.js";
import deliveryFuture from "./modules/delivery-future.js";
import legal from "./modules/legal.js";

export const modules = [
  appFoundation,
  homeNavigation,
  authentication,
  notifications,
  rewards,
  membershipCredit,
  membershipPoints,
  membershipMemberCard,
  shopOrdering,
  deliveryFuture,
  legal
];
