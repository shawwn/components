## j-SnackBar

- singleton
- info message `SETTER('snackbar', 'show', 'MESSAGE', '[BUTTON_LABEL]', [callback_dismiss])`
- success message `SETTER('snackbar', 'success', 'MESSAGE', '[BUTTON_LABEL]', [callback_dismiss])`
- warning message `SETTER('snackbar', 'warning', 'MESSAGE', '[BUTTON_LABEL]', [callback_dismiss])`
- `message` can contain `HTML` code

__Configuration__:

- `button` {String} A label for dismiss button (default: `Dismiss`)
- `timeout` {Number} A timeout in milliseconds (default: `3000`)

### Author

- Peter Širka <petersirka@gmail.com>
- License: MIT