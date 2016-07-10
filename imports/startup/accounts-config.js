/**
 * Created by veeramuthum on 7/8/16.
 */

import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});