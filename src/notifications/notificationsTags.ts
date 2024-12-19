import { OneSignal } from 'react-native-onesignal';

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: 'Thiago Leite',
    user_email: 'leite.tjs@gmail.com',
  });
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTags({ cart_items_count: itemsCount });
}
