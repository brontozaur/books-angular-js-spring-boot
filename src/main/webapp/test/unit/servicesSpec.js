'use strict';

describe('service', function () {

    // load modules
    beforeEach(module('BooksManager'));

    // Test service availability
    it('check the existence of EdituriService', inject(function(EdituriService) {
        expect(EdituriService).toBeDefined();
    }));

});