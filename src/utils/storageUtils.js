import store from 'store';
import UUID from 'uuidjs';

const USER_TEMP_ID_KEY = 'user_temp_id_key';

/* 
获取用户临时ID
*/
export function getUserTempId() {
  // 从localStorage中读取
  let userTempId = store.get(USER_TEMP_ID_KEY);
  // 如果localStorage中没有, 生成一个新的, 并保存到local中
  if (userTempId) {
    userTempId = UUID.generate();
    store.set(USER_TEMP_ID_KEY, userTempId);
  }

  // 返回它
  return userTempId;
}
