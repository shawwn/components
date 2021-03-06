COMPONENT('qrcode', 'size:200', function(self, config) {

	var url = 'https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data={0}&qzone=0&margin=0&size={1}x{1}&ecc=L';
	var img = null;

	self.readonly();

	self.setter = function(value) {

		var src = url;

		if (value) {
			value = value.toString();
		} else {
			src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP7//wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
			value = '';
		}

		var text = encodeURIComponent(value);
		if (img) {
			img.attr('src', src.format(text, config.size));
		} else {
			self.html('<img src="{0}" alt="QR Code" border="0" style="max-width:100%;height:auto" />'.format(src.format(text, config.size)));
			img = self.find('img');
		}
	};
});