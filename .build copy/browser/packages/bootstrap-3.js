(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/bootstrap-3/bootstrap-3/js/bootstrap.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* ========================================================================                                            // 1
 * Bootstrap: alert.js v3.0.0                                                                                          // 2
 * http://twbs.github.com/bootstrap/javascript.html#alerts                                                             // 3
 * ========================================================================                                            // 4
 * Copyright 2013 Twitter, Inc.                                                                                        // 5
 *                                                                                                                     // 6
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 7
 * you may not use this file except in compliance with the License.                                                    // 8
 * You may obtain a copy of the License at                                                                             // 9
 *                                                                                                                     // 10
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 11
 *                                                                                                                     // 12
 * Unless required by applicable law or agreed to in writing, software                                                 // 13
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 14
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 15
 * See the License for the specific language governing permissions and                                                 // 16
 * limitations under the License.                                                                                      // 17
 * ======================================================================== */                                         // 18
                                                                                                                       // 19
                                                                                                                       // 20
+function ($) { "use strict";                                                                                          // 21
                                                                                                                       // 22
  // ALERT CLASS DEFINITION                                                                                            // 23
  // ======================                                                                                            // 24
                                                                                                                       // 25
  var dismiss = '[data-dismiss="alert"]'                                                                               // 26
  var Alert   = function (el) {                                                                                        // 27
    $(el).on('click', dismiss, this.close)                                                                             // 28
  }                                                                                                                    // 29
                                                                                                                       // 30
  Alert.prototype.close = function (e) {                                                                               // 31
    var $this    = $(this)                                                                                             // 32
    var selector = $this.attr('data-target')                                                                           // 33
                                                                                                                       // 34
    if (!selector) {                                                                                                   // 35
      selector = $this.attr('href')                                                                                    // 36
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7                                   // 37
    }                                                                                                                  // 38
                                                                                                                       // 39
    var $parent = $(selector)                                                                                          // 40
                                                                                                                       // 41
    if (e) e.preventDefault()                                                                                          // 42
                                                                                                                       // 43
    if (!$parent.length) {                                                                                             // 44
      $parent = $this.hasClass('alert') ? $this : $this.parent()                                                       // 45
    }                                                                                                                  // 46
                                                                                                                       // 47
    $parent.trigger(e = $.Event('close.bs.alert'))                                                                     // 48
                                                                                                                       // 49
    if (e.isDefaultPrevented()) return                                                                                 // 50
                                                                                                                       // 51
    $parent.removeClass('in')                                                                                          // 52
                                                                                                                       // 53
    function removeElement() {                                                                                         // 54
      $parent.trigger('closed.bs.alert').remove()                                                                      // 55
    }                                                                                                                  // 56
                                                                                                                       // 57
    $.support.transition && $parent.hasClass('fade') ?                                                                 // 58
      $parent                                                                                                          // 59
        .one($.support.transition.end, removeElement)                                                                  // 60
        .emulateTransitionEnd(150) :                                                                                   // 61
      removeElement()                                                                                                  // 62
  }                                                                                                                    // 63
                                                                                                                       // 64
                                                                                                                       // 65
  // ALERT PLUGIN DEFINITION                                                                                           // 66
  // =======================                                                                                           // 67
                                                                                                                       // 68
  var old = $.fn.alert                                                                                                 // 69
                                                                                                                       // 70
  $.fn.alert = function (option) {                                                                                     // 71
    return this.each(function () {                                                                                     // 72
      var $this = $(this)                                                                                              // 73
      var data  = $this.data('bs.alert')                                                                               // 74
                                                                                                                       // 75
      if (!data) $this.data('bs.alert', (data = new Alert(this)))                                                      // 76
      if (typeof option == 'string') data[option].call($this)                                                          // 77
    })                                                                                                                 // 78
  }                                                                                                                    // 79
                                                                                                                       // 80
  $.fn.alert.Constructor = Alert                                                                                       // 81
                                                                                                                       // 82
                                                                                                                       // 83
  // ALERT NO CONFLICT                                                                                                 // 84
  // =================                                                                                                 // 85
                                                                                                                       // 86
  $.fn.alert.noConflict = function () {                                                                                // 87
    $.fn.alert = old                                                                                                   // 88
    return this                                                                                                        // 89
  }                                                                                                                    // 90
                                                                                                                       // 91
                                                                                                                       // 92
  // ALERT DATA-API                                                                                                    // 93
  // ==============                                                                                                    // 94
                                                                                                                       // 95
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)                                            // 96
                                                                                                                       // 97
}(window.jQuery);                                                                                                      // 98
                                                                                                                       // 99
/* ========================================================================                                            // 100
 * Bootstrap: button.js v3.0.0                                                                                         // 101
 * http://twbs.github.com/bootstrap/javascript.html#buttons                                                            // 102
 * ========================================================================                                            // 103
 * Copyright 2013 Twitter, Inc.                                                                                        // 104
 *                                                                                                                     // 105
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 106
 * you may not use this file except in compliance with the License.                                                    // 107
 * You may obtain a copy of the License at                                                                             // 108
 *                                                                                                                     // 109
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 110
 *                                                                                                                     // 111
 * Unless required by applicable law or agreed to in writing, software                                                 // 112
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 113
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 114
 * See the License for the specific language governing permissions and                                                 // 115
 * limitations under the License.                                                                                      // 116
 * ======================================================================== */                                         // 117
                                                                                                                       // 118
                                                                                                                       // 119
+function ($) { "use strict";                                                                                          // 120
                                                                                                                       // 121
  // BUTTON PUBLIC CLASS DEFINITION                                                                                    // 122
  // ==============================                                                                                    // 123
                                                                                                                       // 124
  var Button = function (element, options) {                                                                           // 125
    this.$element = $(element)                                                                                         // 126
    this.options  = $.extend({}, Button.DEFAULTS, options)                                                             // 127
  }                                                                                                                    // 128
                                                                                                                       // 129
  Button.DEFAULTS = {                                                                                                  // 130
    loadingText: 'loading...'                                                                                          // 131
  }                                                                                                                    // 132
                                                                                                                       // 133
  Button.prototype.setState = function (state) {                                                                       // 134
    var d    = 'disabled'                                                                                              // 135
    var $el  = this.$element                                                                                           // 136
    var val  = $el.is('input') ? 'val' : 'html'                                                                        // 137
    var data = $el.data()                                                                                              // 138
                                                                                                                       // 139
    state = state + 'Text'                                                                                             // 140
                                                                                                                       // 141
    if (!data.resetText) $el.data('resetText', $el[val]())                                                             // 142
                                                                                                                       // 143
    $el[val](data[state] || this.options[state])                                                                       // 144
                                                                                                                       // 145
    // push to event loop to allow forms to submit                                                                     // 146
    setTimeout(function () {                                                                                           // 147
      state == 'loadingText' ?                                                                                         // 148
        $el.addClass(d).attr(d, d) :                                                                                   // 149
        $el.removeClass(d).removeAttr(d);                                                                              // 150
    }, 0)                                                                                                              // 151
  }                                                                                                                    // 152
                                                                                                                       // 153
  Button.prototype.toggle = function () {                                                                              // 154
    var $parent = this.$element.closest('[data-toggle="buttons"]')                                                     // 155
                                                                                                                       // 156
    if ($parent.length) {                                                                                              // 157
      var $input = this.$element.find('input')                                                                         // 158
        .prop('checked', !this.$element.hasClass('active'))                                                            // 159
        .trigger('change')                                                                                             // 160
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')                               // 161
    }                                                                                                                  // 162
                                                                                                                       // 163
    this.$element.toggleClass('active')                                                                                // 164
  }                                                                                                                    // 165
                                                                                                                       // 166
                                                                                                                       // 167
  // BUTTON PLUGIN DEFINITION                                                                                          // 168
  // ========================                                                                                          // 169
                                                                                                                       // 170
  var old = $.fn.button                                                                                                // 171
                                                                                                                       // 172
  $.fn.button = function (option) {                                                                                    // 173
    return this.each(function () {                                                                                     // 174
      var $this   = $(this)                                                                                            // 175
      var data    = $this.data('bs.button')                                                                            // 176
      var options = typeof option == 'object' && option                                                                // 177
                                                                                                                       // 178
      if (!data) $this.data('bs.button', (data = new Button(this, options)))                                           // 179
                                                                                                                       // 180
      if (option == 'toggle') data.toggle()                                                                            // 181
      else if (option) data.setState(option)                                                                           // 182
    })                                                                                                                 // 183
  }                                                                                                                    // 184
                                                                                                                       // 185
  $.fn.button.Constructor = Button                                                                                     // 186
                                                                                                                       // 187
                                                                                                                       // 188
  // BUTTON NO CONFLICT                                                                                                // 189
  // ==================                                                                                                // 190
                                                                                                                       // 191
  $.fn.button.noConflict = function () {                                                                               // 192
    $.fn.button = old                                                                                                  // 193
    return this                                                                                                        // 194
  }                                                                                                                    // 195
                                                                                                                       // 196
                                                                                                                       // 197
  // BUTTON DATA-API                                                                                                   // 198
  // ===============                                                                                                   // 199
                                                                                                                       // 200
  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {                                   // 201
    var $btn = $(e.target)                                                                                             // 202
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')                                                             // 203
    $btn.button('toggle')                                                                                              // 204
    e.preventDefault()                                                                                                 // 205
  })                                                                                                                   // 206
                                                                                                                       // 207
}(window.jQuery);                                                                                                      // 208
                                                                                                                       // 209
/* ========================================================================                                            // 210
 * Bootstrap: carousel.js v3.0.0                                                                                       // 211
 * http://twbs.github.com/bootstrap/javascript.html#carousel                                                           // 212
 * ========================================================================                                            // 213
 * Copyright 2012 Twitter, Inc.                                                                                        // 214
 *                                                                                                                     // 215
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 216
 * you may not use this file except in compliance with the License.                                                    // 217
 * You may obtain a copy of the License at                                                                             // 218
 *                                                                                                                     // 219
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 220
 *                                                                                                                     // 221
 * Unless required by applicable law or agreed to in writing, software                                                 // 222
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 223
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 224
 * See the License for the specific language governing permissions and                                                 // 225
 * limitations under the License.                                                                                      // 226
 * ======================================================================== */                                         // 227
                                                                                                                       // 228
                                                                                                                       // 229
+function ($) { "use strict";                                                                                          // 230
                                                                                                                       // 231
  // CAROUSEL CLASS DEFINITION                                                                                         // 232
  // =========================                                                                                         // 233
                                                                                                                       // 234
  var Carousel = function (element, options) {                                                                         // 235
    this.$element    = $(element)                                                                                      // 236
    this.$indicators = this.$element.find('.carousel-indicators')                                                      // 237
    this.options     = options                                                                                         // 238
    this.paused      =                                                                                                 // 239
    this.sliding     =                                                                                                 // 240
    this.interval    =                                                                                                 // 241
    this.$active     =                                                                                                 // 242
    this.$items      = null                                                                                            // 243
                                                                                                                       // 244
    this.options.pause == 'hover' && this.$element                                                                     // 245
      .on('mouseenter', $.proxy(this.pause, this))                                                                     // 246
      .on('mouseleave', $.proxy(this.cycle, this))                                                                     // 247
  }                                                                                                                    // 248
                                                                                                                       // 249
  Carousel.DEFAULTS = {                                                                                                // 250
    interval: 5000                                                                                                     // 251
  , pause: 'hover'                                                                                                     // 252
  , wrap: true                                                                                                         // 253
  }                                                                                                                    // 254
                                                                                                                       // 255
  Carousel.prototype.cycle =  function (e) {                                                                           // 256
    e || (this.paused = false)                                                                                         // 257
                                                                                                                       // 258
    this.interval && clearInterval(this.interval)                                                                      // 259
                                                                                                                       // 260
    this.options.interval                                                                                              // 261
      && !this.paused                                                                                                  // 262
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))                                // 263
                                                                                                                       // 264
    return this                                                                                                        // 265
  }                                                                                                                    // 266
                                                                                                                       // 267
  Carousel.prototype.getActiveIndex = function () {                                                                    // 268
    this.$active = this.$element.find('.item.active')                                                                  // 269
    this.$items  = this.$active.parent().children()                                                                    // 270
                                                                                                                       // 271
    return this.$items.index(this.$active)                                                                             // 272
  }                                                                                                                    // 273
                                                                                                                       // 274
  Carousel.prototype.to = function (pos) {                                                                             // 275
    var that        = this                                                                                             // 276
    var activeIndex = this.getActiveIndex()                                                                            // 277
                                                                                                                       // 278
    if (pos > (this.$items.length - 1) || pos < 0) return                                                              // 279
                                                                                                                       // 280
    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })                             // 281
    if (activeIndex == pos) return this.pause().cycle()                                                                // 282
                                                                                                                       // 283
    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))                                        // 284
  }                                                                                                                    // 285
                                                                                                                       // 286
  Carousel.prototype.pause = function (e) {                                                                            // 287
    e || (this.paused = true)                                                                                          // 288
                                                                                                                       // 289
    if (this.$element.find('.next, .prev').length && $.support.transition.end) {                                       // 290
      this.$element.trigger($.support.transition.end)                                                                  // 291
      this.cycle(true)                                                                                                 // 292
    }                                                                                                                  // 293
                                                                                                                       // 294
    this.interval = clearInterval(this.interval)                                                                       // 295
                                                                                                                       // 296
    return this                                                                                                        // 297
  }                                                                                                                    // 298
                                                                                                                       // 299
  Carousel.prototype.next = function () {                                                                              // 300
    if (this.sliding) return                                                                                           // 301
    return this.slide('next')                                                                                          // 302
  }                                                                                                                    // 303
                                                                                                                       // 304
  Carousel.prototype.prev = function () {                                                                              // 305
    if (this.sliding) return                                                                                           // 306
    return this.slide('prev')                                                                                          // 307
  }                                                                                                                    // 308
                                                                                                                       // 309
  Carousel.prototype.slide = function (type, next) {                                                                   // 310
    var $active   = this.$element.find('.item.active')                                                                 // 311
    var $next     = next || $active[type]()                                                                            // 312
    var isCycling = this.interval                                                                                      // 313
    var direction = type == 'next' ? 'left' : 'right'                                                                  // 314
    var fallback  = type == 'next' ? 'first' : 'last'                                                                  // 315
    var that      = this                                                                                               // 316
                                                                                                                       // 317
    if (!$next.length) {                                                                                               // 318
      if (!this.options.wrap) return                                                                                   // 319
      $next = this.$element.find('.item')[fallback]()                                                                  // 320
    }                                                                                                                  // 321
                                                                                                                       // 322
    this.sliding = true                                                                                                // 323
                                                                                                                       // 324
    isCycling && this.pause()                                                                                          // 325
                                                                                                                       // 326
    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })                            // 327
                                                                                                                       // 328
    if ($next.hasClass('active')) return                                                                               // 329
                                                                                                                       // 330
    if (this.$indicators.length) {                                                                                     // 331
      this.$indicators.find('.active').removeClass('active')                                                           // 332
      this.$element.one('slid', function () {                                                                          // 333
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])                                     // 334
        $nextIndicator && $nextIndicator.addClass('active')                                                            // 335
      })                                                                                                               // 336
    }                                                                                                                  // 337
                                                                                                                       // 338
    if ($.support.transition && this.$element.hasClass('slide')) {                                                     // 339
      this.$element.trigger(e)                                                                                         // 340
      if (e.isDefaultPrevented()) return                                                                               // 341
      $next.addClass(type)                                                                                             // 342
      $next[0].offsetWidth // force reflow                                                                             // 343
      $active.addClass(direction)                                                                                      // 344
      $next.addClass(direction)                                                                                        // 345
      $active                                                                                                          // 346
        .one($.support.transition.end, function () {                                                                   // 347
          $next.removeClass([type, direction].join(' ')).addClass('active')                                            // 348
          $active.removeClass(['active', direction].join(' '))                                                         // 349
          that.sliding = false                                                                                         // 350
          setTimeout(function () { that.$element.trigger('slid') }, 0)                                                 // 351
        })                                                                                                             // 352
        .emulateTransitionEnd(600)                                                                                     // 353
    } else {                                                                                                           // 354
      this.$element.trigger(e)                                                                                         // 355
      if (e.isDefaultPrevented()) return                                                                               // 356
      $active.removeClass('active')                                                                                    // 357
      $next.addClass('active')                                                                                         // 358
      this.sliding = false                                                                                             // 359
      this.$element.trigger('slid')                                                                                    // 360
    }                                                                                                                  // 361
                                                                                                                       // 362
    isCycling && this.cycle()                                                                                          // 363
                                                                                                                       // 364
    return this                                                                                                        // 365
  }                                                                                                                    // 366
                                                                                                                       // 367
                                                                                                                       // 368
  // CAROUSEL PLUGIN DEFINITION                                                                                        // 369
  // ==========================                                                                                        // 370
                                                                                                                       // 371
  var old = $.fn.carousel                                                                                              // 372
                                                                                                                       // 373
  $.fn.carousel = function (option) {                                                                                  // 374
    return this.each(function () {                                                                                     // 375
      var $this   = $(this)                                                                                            // 376
      var data    = $this.data('bs.carousel')                                                                          // 377
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)                 // 378
      var action  = typeof option == 'string' ? option : options.slide                                                 // 379
                                                                                                                       // 380
      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))                                       // 381
      if (typeof option == 'number') data.to(option)                                                                   // 382
      else if (action) data[action]()                                                                                  // 383
      else if (options.interval) data.pause().cycle()                                                                  // 384
    })                                                                                                                 // 385
  }                                                                                                                    // 386
                                                                                                                       // 387
  $.fn.carousel.Constructor = Carousel                                                                                 // 388
                                                                                                                       // 389
                                                                                                                       // 390
  // CAROUSEL NO CONFLICT                                                                                              // 391
  // ====================                                                                                              // 392
                                                                                                                       // 393
  $.fn.carousel.noConflict = function () {                                                                             // 394
    $.fn.carousel = old                                                                                                // 395
    return this                                                                                                        // 396
  }                                                                                                                    // 397
                                                                                                                       // 398
                                                                                                                       // 399
  // CAROUSEL DATA-API                                                                                                 // 400
  // =================                                                                                                 // 401
                                                                                                                       // 402
  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {                         // 403
    var $this   = $(this), href                                                                                        // 404
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())                                                           // 406
    var slideIndex = $this.attr('data-slide-to')                                                                       // 407
    if (slideIndex) options.interval = false                                                                           // 408
                                                                                                                       // 409
    $target.carousel(options)                                                                                          // 410
                                                                                                                       // 411
    if (slideIndex = $this.attr('data-slide-to')) {                                                                    // 412
      $target.data('bs.carousel').to(slideIndex)                                                                       // 413
    }                                                                                                                  // 414
                                                                                                                       // 415
    e.preventDefault()                                                                                                 // 416
  })                                                                                                                   // 417
                                                                                                                       // 418
  $(window).on('load', function () {                                                                                   // 419
    $('[data-ride="carousel"]').each(function () {                                                                     // 420
      var $carousel = $(this)                                                                                          // 421
      $carousel.carousel($carousel.data())                                                                             // 422
    })                                                                                                                 // 423
  })                                                                                                                   // 424
                                                                                                                       // 425
}(window.jQuery);                                                                                                      // 426
                                                                                                                       // 427
/* ========================================================================                                            // 428
 * Bootstrap: dropdown.js v3.0.0                                                                                       // 429
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns                                                          // 430
 * ========================================================================                                            // 431
 * Copyright 2012 Twitter, Inc.                                                                                        // 432
 *                                                                                                                     // 433
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 434
 * you may not use this file except in compliance with the License.                                                    // 435
 * You may obtain a copy of the License at                                                                             // 436
 *                                                                                                                     // 437
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 438
 *                                                                                                                     // 439
 * Unless required by applicable law or agreed to in writing, software                                                 // 440
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 441
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 442
 * See the License for the specific language governing permissions and                                                 // 443
 * limitations under the License.                                                                                      // 444
 * ======================================================================== */                                         // 445
                                                                                                                       // 446
                                                                                                                       // 447
+function ($) { "use strict";                                                                                          // 448
                                                                                                                       // 449
  // DROPDOWN CLASS DEFINITION                                                                                         // 450
  // =========================                                                                                         // 451
                                                                                                                       // 452
  var backdrop = '.dropdown-backdrop'                                                                                  // 453
  var toggle   = '[data-toggle=dropdown]'                                                                              // 454
  var Dropdown = function (element) {                                                                                  // 455
    var $el = $(element).on('click.bs.dropdown', this.toggle)                                                          // 456
  }                                                                                                                    // 457
                                                                                                                       // 458
  Dropdown.prototype.toggle = function (e) {                                                                           // 459
    var $this = $(this)                                                                                                // 460
                                                                                                                       // 461
    if ($this.is('.disabled, :disabled')) return                                                                       // 462
                                                                                                                       // 463
    var $parent  = getParent($this)                                                                                    // 464
    var isActive = $parent.hasClass('open')                                                                            // 465
                                                                                                                       // 466
    clearMenus()                                                                                                       // 467
                                                                                                                       // 468
    if (!isActive) {                                                                                                   // 469
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {                      // 470
        // if mobile we we use a backdrop because click events don't delegate                                          // 471
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)                             // 472
      }                                                                                                                // 473
                                                                                                                       // 474
      $parent.trigger(e = $.Event('show.bs.dropdown'))                                                                 // 475
                                                                                                                       // 476
      if (e.isDefaultPrevented()) return                                                                               // 477
                                                                                                                       // 478
      $parent                                                                                                          // 479
        .toggleClass('open')                                                                                           // 480
        .trigger('shown.bs.dropdown')                                                                                  // 481
                                                                                                                       // 482
      $this.focus()                                                                                                    // 483
    }                                                                                                                  // 484
                                                                                                                       // 485
    return false                                                                                                       // 486
  }                                                                                                                    // 487
                                                                                                                       // 488
  Dropdown.prototype.keydown = function (e) {                                                                          // 489
    if (!/(38|40|27)/.test(e.keyCode)) return                                                                          // 490
                                                                                                                       // 491
    var $this = $(this)                                                                                                // 492
                                                                                                                       // 493
    e.preventDefault()                                                                                                 // 494
    e.stopPropagation()                                                                                                // 495
                                                                                                                       // 496
    if ($this.is('.disabled, :disabled')) return                                                                       // 497
                                                                                                                       // 498
    var $parent  = getParent($this)                                                                                    // 499
    var isActive = $parent.hasClass('open')                                                                            // 500
                                                                                                                       // 501
    if (!isActive || (isActive && e.keyCode == 27)) {                                                                  // 502
      if (e.which == 27) $parent.find(toggle).focus()                                                                  // 503
      return $this.click()                                                                                             // 504
    }                                                                                                                  // 505
                                                                                                                       // 506
    var $items = $('[role=menu] li:not(.divider):visible a', $parent)                                                  // 507
                                                                                                                       // 508
    if (!$items.length) return                                                                                         // 509
                                                                                                                       // 510
    var index = $items.index($items.filter(':focus'))                                                                  // 511
                                                                                                                       // 512
    if (e.keyCode == 38 && index > 0)                 index--                        // up                             // 513
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down                           // 514
    if (!~index)                                      index=0                                                          // 515
                                                                                                                       // 516
    $items.eq(index).focus()                                                                                           // 517
  }                                                                                                                    // 518
                                                                                                                       // 519
  function clearMenus() {                                                                                              // 520
    $(backdrop).remove()                                                                                               // 521
    $(toggle).each(function (e) {                                                                                      // 522
      var $parent = getParent($(this))                                                                                 // 523
      if (!$parent.hasClass('open')) return                                                                            // 524
      $parent.trigger(e = $.Event('hide.bs.dropdown'))                                                                 // 525
      if (e.isDefaultPrevented()) return                                                                               // 526
      $parent.removeClass('open').trigger('hidden.bs.dropdown')                                                        // 527
    })                                                                                                                 // 528
  }                                                                                                                    // 529
                                                                                                                       // 530
  function getParent($this) {                                                                                          // 531
    var selector = $this.attr('data-target')                                                                           // 532
                                                                                                                       // 533
    if (!selector) {                                                                                                   // 534
      selector = $this.attr('href')                                                                                    // 535
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7              // 536
    }                                                                                                                  // 537
                                                                                                                       // 538
    var $parent = selector && $(selector)                                                                              // 539
                                                                                                                       // 540
    return $parent && $parent.length ? $parent : $this.parent()                                                        // 541
  }                                                                                                                    // 542
                                                                                                                       // 543
                                                                                                                       // 544
  // DROPDOWN PLUGIN DEFINITION                                                                                        // 545
  // ==========================                                                                                        // 546
                                                                                                                       // 547
  var old = $.fn.dropdown                                                                                              // 548
                                                                                                                       // 549
  $.fn.dropdown = function (option) {                                                                                  // 550
    return this.each(function () {                                                                                     // 551
      var $this = $(this)                                                                                              // 552
      var data  = $this.data('dropdown')                                                                               // 553
                                                                                                                       // 554
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))                                                   // 555
      if (typeof option == 'string') data[option].call($this)                                                          // 556
    })                                                                                                                 // 557
  }                                                                                                                    // 558
                                                                                                                       // 559
  $.fn.dropdown.Constructor = Dropdown                                                                                 // 560
                                                                                                                       // 561
                                                                                                                       // 562
  // DROPDOWN NO CONFLICT                                                                                              // 563
  // ====================                                                                                              // 564
                                                                                                                       // 565
  $.fn.dropdown.noConflict = function () {                                                                             // 566
    $.fn.dropdown = old                                                                                                // 567
    return this                                                                                                        // 568
  }                                                                                                                    // 569
                                                                                                                       // 570
                                                                                                                       // 571
  // APPLY TO STANDARD DROPDOWN ELEMENTS                                                                               // 572
  // ===================================                                                                               // 573
                                                                                                                       // 574
  $(document)                                                                                                          // 575
    .on('click.bs.dropdown.data-api', clearMenus)                                                                      // 576
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })                          // 577
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)                                             // 578
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)                         // 579
                                                                                                                       // 580
}(window.jQuery);                                                                                                      // 581
                                                                                                                       // 582
/* ========================================================================                                            // 583
 * Bootstrap: modal.js v3.0.0                                                                                          // 584
 * http://twbs.github.com/bootstrap/javascript.html#modals                                                             // 585
 * ========================================================================                                            // 586
 * Copyright 2012 Twitter, Inc.                                                                                        // 587
 *                                                                                                                     // 588
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 589
 * you may not use this file except in compliance with the License.                                                    // 590
 * You may obtain a copy of the License at                                                                             // 591
 *                                                                                                                     // 592
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 593
 *                                                                                                                     // 594
 * Unless required by applicable law or agreed to in writing, software                                                 // 595
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 596
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 597
 * See the License for the specific language governing permissions and                                                 // 598
 * limitations under the License.                                                                                      // 599
 * ======================================================================== */                                         // 600
                                                                                                                       // 601
                                                                                                                       // 602
+function ($) { "use strict";                                                                                          // 603
                                                                                                                       // 604
  // MODAL CLASS DEFINITION                                                                                            // 605
  // ======================                                                                                            // 606
                                                                                                                       // 607
  var Modal = function (element, options) {                                                                            // 608
    this.options   = options                                                                                           // 609
    this.$element  = $(element)                                                                                        // 610
    this.$backdrop =                                                                                                   // 611
    this.isShown   = null                                                                                              // 612
                                                                                                                       // 613
    if (this.options.remote) this.$element.load(this.options.remote)                                                   // 614
  }                                                                                                                    // 615
                                                                                                                       // 616
  Modal.DEFAULTS = {                                                                                                   // 617
      backdrop: true                                                                                                   // 618
    , keyboard: true                                                                                                   // 619
    , show: true                                                                                                       // 620
  }                                                                                                                    // 621
                                                                                                                       // 622
  Modal.prototype.toggle = function (_relatedTarget) {                                                                 // 623
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)                                                       // 624
  }                                                                                                                    // 625
                                                                                                                       // 626
  Modal.prototype.show = function (_relatedTarget) {                                                                   // 627
    var that = this                                                                                                    // 628
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })                                             // 629
                                                                                                                       // 630
    this.$element.trigger(e)                                                                                           // 631
                                                                                                                       // 632
    if (this.isShown || e.isDefaultPrevented()) return                                                                 // 633
                                                                                                                       // 634
    this.isShown = true                                                                                                // 635
                                                                                                                       // 636
    this.escape()                                                                                                      // 637
                                                                                                                       // 638
    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))                        // 639
                                                                                                                       // 640
    this.backdrop(function () {                                                                                        // 641
      var transition = $.support.transition && that.$element.hasClass('fade')                                          // 642
                                                                                                                       // 643
      if (!that.$element.parent().length) {                                                                            // 644
        that.$element.appendTo(document.body) // don't move modals dom position                                        // 645
      }                                                                                                                // 646
                                                                                                                       // 647
      that.$element.show()                                                                                             // 648
                                                                                                                       // 649
      if (transition) {                                                                                                // 650
        that.$element[0].offsetWidth // force reflow                                                                   // 651
      }                                                                                                                // 652
                                                                                                                       // 653
      that.$element                                                                                                    // 654
        .addClass('in')                                                                                                // 655
        .attr('aria-hidden', false)                                                                                    // 656
                                                                                                                       // 657
      that.enforceFocus()                                                                                              // 658
                                                                                                                       // 659
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })                                             // 660
                                                                                                                       // 661
      transition ?                                                                                                     // 662
        that.$element.find('.modal-dialog') // wait for modal to slide in                                              // 663
          .one($.support.transition.end, function () {                                                                 // 664
            that.$element.focus().trigger(e)                                                                           // 665
          })                                                                                                           // 666
          .emulateTransitionEnd(300) :                                                                                 // 667
        that.$element.focus().trigger(e)                                                                               // 668
    })                                                                                                                 // 669
  }                                                                                                                    // 670
                                                                                                                       // 671
  Modal.prototype.hide = function (e) {                                                                                // 672
    if (e) e.preventDefault()                                                                                          // 673
                                                                                                                       // 674
    e = $.Event('hide.bs.modal')                                                                                       // 675
                                                                                                                       // 676
    this.$element.trigger(e)                                                                                           // 677
                                                                                                                       // 678
    if (!this.isShown || e.isDefaultPrevented()) return                                                                // 679
                                                                                                                       // 680
    this.isShown = false                                                                                               // 681
                                                                                                                       // 682
    this.escape()                                                                                                      // 683
                                                                                                                       // 684
    $(document).off('focusin.bs.modal')                                                                                // 685
                                                                                                                       // 686
    this.$element                                                                                                      // 687
      .removeClass('in')                                                                                               // 688
      .attr('aria-hidden', true)                                                                                       // 689
      .off('click.dismiss.modal')                                                                                      // 690
                                                                                                                       // 691
    $.support.transition && this.$element.hasClass('fade') ?                                                           // 692
      this.$element                                                                                                    // 693
        .one($.support.transition.end, $.proxy(this.hideModal, this))                                                  // 694
        .emulateTransitionEnd(300) :                                                                                   // 695
      this.hideModal()                                                                                                 // 696
  }                                                                                                                    // 697
                                                                                                                       // 698
  Modal.prototype.enforceFocus = function () {                                                                         // 699
    $(document)                                                                                                        // 700
      .off('focusin.bs.modal') // guard against infinite focus loop                                                    // 701
      .on('focusin.bs.modal', $.proxy(function (e) {                                                                   // 702
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {                                    // 703
          this.$element.focus()                                                                                        // 704
        }                                                                                                              // 705
      }, this))                                                                                                        // 706
  }                                                                                                                    // 707
                                                                                                                       // 708
  Modal.prototype.escape = function () {                                                                               // 709
    if (this.isShown && this.options.keyboard) {                                                                       // 710
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {                                                // 711
        e.which == 27 && this.hide()                                                                                   // 712
      }, this))                                                                                                        // 713
    } else if (!this.isShown) {                                                                                        // 714
      this.$element.off('keyup.dismiss.bs.modal')                                                                      // 715
    }                                                                                                                  // 716
  }                                                                                                                    // 717
                                                                                                                       // 718
  Modal.prototype.hideModal = function () {                                                                            // 719
    var that = this                                                                                                    // 720
    this.$element.hide()                                                                                               // 721
    this.backdrop(function () {                                                                                        // 722
      that.removeBackdrop()                                                                                            // 723
      that.$element.trigger('hidden.bs.modal')                                                                         // 724
    })                                                                                                                 // 725
  }                                                                                                                    // 726
                                                                                                                       // 727
  Modal.prototype.removeBackdrop = function () {                                                                       // 728
    this.$backdrop && this.$backdrop.remove()                                                                          // 729
    this.$backdrop = null                                                                                              // 730
  }                                                                                                                    // 731
                                                                                                                       // 732
  Modal.prototype.backdrop = function (callback) {                                                                     // 733
    var that    = this                                                                                                 // 734
    var animate = this.$element.hasClass('fade') ? 'fade' : ''                                                         // 735
                                                                                                                       // 736
    if (this.isShown && this.options.backdrop) {                                                                       // 737
      var doAnimate = $.support.transition && animate                                                                  // 738
                                                                                                                       // 739
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')                                             // 740
        .appendTo(document.body)                                                                                       // 741
                                                                                                                       // 742
      this.$element.on('click.dismiss.modal', $.proxy(function (e) {                                                   // 743
        if (e.target !== e.currentTarget) return                                                                       // 744
        this.options.backdrop == 'static'                                                                              // 745
          ? this.$element[0].focus.call(this.$element[0])                                                              // 746
          : this.hide.call(this)                                                                                       // 747
      }, this))                                                                                                        // 748
                                                                                                                       // 749
      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow                                                     // 750
                                                                                                                       // 751
      this.$backdrop.addClass('in')                                                                                    // 752
                                                                                                                       // 753
      if (!callback) return                                                                                            // 754
                                                                                                                       // 755
      doAnimate ?                                                                                                      // 756
        this.$backdrop                                                                                                 // 757
          .one($.support.transition.end, callback)                                                                     // 758
          .emulateTransitionEnd(150) :                                                                                 // 759
        callback()                                                                                                     // 760
                                                                                                                       // 761
    } else if (!this.isShown && this.$backdrop) {                                                                      // 762
      this.$backdrop.removeClass('in')                                                                                 // 763
                                                                                                                       // 764
      $.support.transition && this.$element.hasClass('fade')?                                                          // 765
        this.$backdrop                                                                                                 // 766
          .one($.support.transition.end, callback)                                                                     // 767
          .emulateTransitionEnd(150) :                                                                                 // 768
        callback()                                                                                                     // 769
                                                                                                                       // 770
    } else if (callback) {                                                                                             // 771
      callback()                                                                                                       // 772
    }                                                                                                                  // 773
  }                                                                                                                    // 774
                                                                                                                       // 775
                                                                                                                       // 776
  // MODAL PLUGIN DEFINITION                                                                                           // 777
  // =======================                                                                                           // 778
                                                                                                                       // 779
  var old = $.fn.modal                                                                                                 // 780
                                                                                                                       // 781
  $.fn.modal = function (option, _relatedTarget) {                                                                     // 782
    return this.each(function () {                                                                                     // 783
      var $this   = $(this)                                                                                            // 784
      var data    = $this.data('bs.modal')                                                                             // 785
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)                    // 786
                                                                                                                       // 787
      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))                                             // 788
      if (typeof option == 'string') data[option](_relatedTarget)                                                      // 789
      else if (options.show) data.show(_relatedTarget)                                                                 // 790
    })                                                                                                                 // 791
  }                                                                                                                    // 792
                                                                                                                       // 793
  $.fn.modal.Constructor = Modal                                                                                       // 794
                                                                                                                       // 795
                                                                                                                       // 796
  // MODAL NO CONFLICT                                                                                                 // 797
  // =================                                                                                                 // 798
                                                                                                                       // 799
  $.fn.modal.noConflict = function () {                                                                                // 800
    $.fn.modal = old                                                                                                   // 801
    return this                                                                                                        // 802
  }                                                                                                                    // 803
                                                                                                                       // 804
                                                                                                                       // 805
  // MODAL DATA-API                                                                                                    // 806
  // ==============                                                                                                    // 807
                                                                                                                       // 808
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {                                    // 809
    var $this   = $(this)                                                                                              // 810
    var href    = $this.attr('href')                                                                                   // 811
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7         // 812
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
                                                                                                                       // 814
    e.preventDefault()                                                                                                 // 815
                                                                                                                       // 816
    $target                                                                                                            // 817
      .modal(option, this)                                                                                             // 818
      .one('hide', function () {                                                                                       // 819
        $this.is(':visible') && $this.focus()                                                                          // 820
      })                                                                                                               // 821
  })                                                                                                                   // 822
                                                                                                                       // 823
  $(document)                                                                                                          // 824
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })                           // 825
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })                       // 826
                                                                                                                       // 827
}(window.jQuery);                                                                                                      // 828
                                                                                                                       // 829
/* ========================================================================                                            // 830
 * Bootstrap: tooltip.js v3.0.0                                                                                        // 831
 * http://twbs.github.com/bootstrap/javascript.html#tooltip                                                            // 832
 * Inspired by the original jQuery.tipsy by Jason Frame                                                                // 833
 * ========================================================================                                            // 834
 * Copyright 2012 Twitter, Inc.                                                                                        // 835
 *                                                                                                                     // 836
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 837
 * you may not use this file except in compliance with the License.                                                    // 838
 * You may obtain a copy of the License at                                                                             // 839
 *                                                                                                                     // 840
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 841
 *                                                                                                                     // 842
 * Unless required by applicable law or agreed to in writing, software                                                 // 843
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 844
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 845
 * See the License for the specific language governing permissions and                                                 // 846
 * limitations under the License.                                                                                      // 847
 * ======================================================================== */                                         // 848
                                                                                                                       // 849
                                                                                                                       // 850
+function ($) { "use strict";                                                                                          // 851
                                                                                                                       // 852
  // TOOLTIP PUBLIC CLASS DEFINITION                                                                                   // 853
  // ===============================                                                                                   // 854
                                                                                                                       // 855
  var Tooltip = function (element, options) {                                                                          // 856
    this.type       =                                                                                                  // 857
    this.options    =                                                                                                  // 858
    this.enabled    =                                                                                                  // 859
    this.timeout    =                                                                                                  // 860
    this.hoverState =                                                                                                  // 861
    this.$element   = null                                                                                             // 862
                                                                                                                       // 863
    this.init('tooltip', element, options)                                                                             // 864
  }                                                                                                                    // 865
                                                                                                                       // 866
  Tooltip.DEFAULTS = {                                                                                                 // 867
    animation: true                                                                                                    // 868
  , placement: 'top'                                                                                                   // 869
  , selector: false                                                                                                    // 870
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'          // 871
  , trigger: 'hover focus'                                                                                             // 872
  , title: ''                                                                                                          // 873
  , delay: 0                                                                                                           // 874
  , html: false                                                                                                        // 875
  , container: false                                                                                                   // 876
  }                                                                                                                    // 877
                                                                                                                       // 878
  Tooltip.prototype.init = function (type, element, options) {                                                         // 879
    this.enabled  = true                                                                                               // 880
    this.type     = type                                                                                               // 881
    this.$element = $(element)                                                                                         // 882
    this.options  = this.getOptions(options)                                                                           // 883
                                                                                                                       // 884
    var triggers = this.options.trigger.split(' ')                                                                     // 885
                                                                                                                       // 886
    for (var i = triggers.length; i--;) {                                                                              // 887
      var trigger = triggers[i]                                                                                        // 888
                                                                                                                       // 889
      if (trigger == 'click') {                                                                                        // 890
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))                      // 891
      } else if (trigger != 'manual') {                                                                                // 892
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'                                                     // 893
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'                                                      // 894
                                                                                                                       // 895
        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))                 // 896
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))                 // 897
      }                                                                                                                // 898
    }                                                                                                                  // 899
                                                                                                                       // 900
    this.options.selector ?                                                                                            // 901
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :                              // 902
      this.fixTitle()                                                                                                  // 903
  }                                                                                                                    // 904
                                                                                                                       // 905
  Tooltip.prototype.getDefaults = function () {                                                                        // 906
    return Tooltip.DEFAULTS                                                                                            // 907
  }                                                                                                                    // 908
                                                                                                                       // 909
  Tooltip.prototype.getOptions = function (options) {                                                                  // 910
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)                                          // 911
                                                                                                                       // 912
    if (options.delay && typeof options.delay == 'number') {                                                           // 913
      options.delay = {                                                                                                // 914
        show: options.delay                                                                                            // 915
      , hide: options.delay                                                                                            // 916
      }                                                                                                                // 917
    }                                                                                                                  // 918
                                                                                                                       // 919
    return options                                                                                                     // 920
  }                                                                                                                    // 921
                                                                                                                       // 922
  Tooltip.prototype.getDelegateOptions = function () {                                                                 // 923
    var options  = {}                                                                                                  // 924
    var defaults = this.getDefaults()                                                                                  // 925
                                                                                                                       // 926
    this._options && $.each(this._options, function (key, value) {                                                     // 927
      if (defaults[key] != value) options[key] = value                                                                 // 928
    })                                                                                                                 // 929
                                                                                                                       // 930
    return options                                                                                                     // 931
  }                                                                                                                    // 932
                                                                                                                       // 933
  Tooltip.prototype.enter = function (obj) {                                                                           // 934
    var self = obj instanceof this.constructor ?                                                                       // 935
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)                         // 936
                                                                                                                       // 937
    clearTimeout(self.timeout)                                                                                         // 938
                                                                                                                       // 939
    self.hoverState = 'in'                                                                                             // 940
                                                                                                                       // 941
    if (!self.options.delay || !self.options.delay.show) return self.show()                                            // 942
                                                                                                                       // 943
    self.timeout = setTimeout(function () {                                                                            // 944
      if (self.hoverState == 'in') self.show()                                                                         // 945
    }, self.options.delay.show)                                                                                        // 946
  }                                                                                                                    // 947
                                                                                                                       // 948
  Tooltip.prototype.leave = function (obj) {                                                                           // 949
    var self = obj instanceof this.constructor ?                                                                       // 950
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)                         // 951
                                                                                                                       // 952
    clearTimeout(self.timeout)                                                                                         // 953
                                                                                                                       // 954
    self.hoverState = 'out'                                                                                            // 955
                                                                                                                       // 956
    if (!self.options.delay || !self.options.delay.hide) return self.hide()                                            // 957
                                                                                                                       // 958
    self.timeout = setTimeout(function () {                                                                            // 959
      if (self.hoverState == 'out') self.hide()                                                                        // 960
    }, self.options.delay.hide)                                                                                        // 961
  }                                                                                                                    // 962
                                                                                                                       // 963
  Tooltip.prototype.show = function () {                                                                               // 964
    var e = $.Event('show.bs.'+ this.type)                                                                             // 965
                                                                                                                       // 966
    if (this.hasContent() && this.enabled) {                                                                           // 967
      this.$element.trigger(e)                                                                                         // 968
                                                                                                                       // 969
      if (e.isDefaultPrevented()) return                                                                               // 970
                                                                                                                       // 971
      var $tip = this.tip()                                                                                            // 972
                                                                                                                       // 973
      this.setContent()                                                                                                // 974
                                                                                                                       // 975
      if (this.options.animation) $tip.addClass('fade')                                                                // 976
                                                                                                                       // 977
      var placement = typeof this.options.placement == 'function' ?                                                    // 978
        this.options.placement.call(this, $tip[0], this.$element[0]) :                                                 // 979
        this.options.placement                                                                                         // 980
                                                                                                                       // 981
      var autoToken = /\s?auto?\s?/i                                                                                   // 982
      var autoPlace = autoToken.test(placement)                                                                        // 983
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'                                             // 984
                                                                                                                       // 985
      $tip                                                                                                             // 986
        .detach()                                                                                                      // 987
        .css({ top: 0, left: 0, display: 'block' })                                                                    // 988
        .addClass(placement)                                                                                           // 989
                                                                                                                       // 990
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)                 // 991
                                                                                                                       // 992
      var pos          = this.getPosition()                                                                            // 993
      var actualWidth  = $tip[0].offsetWidth                                                                           // 994
      var actualHeight = $tip[0].offsetHeight                                                                          // 995
                                                                                                                       // 996
      if (autoPlace) {                                                                                                 // 997
        var $parent = this.$element.parent()                                                                           // 998
                                                                                                                       // 999
        var orgPlacement = placement                                                                                   // 1000
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop                               // 1001
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()                // 1002
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()               // 1003
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left                                // 1004
                                                                                                                       // 1005
        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement                                                                                          // 1010
                                                                                                                       // 1011
        $tip                                                                                                           // 1012
          .removeClass(orgPlacement)                                                                                   // 1013
          .addClass(placement)                                                                                         // 1014
      }                                                                                                                // 1015
                                                                                                                       // 1016
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)                       // 1017
                                                                                                                       // 1018
      this.applyPlacement(calculatedOffset, placement)                                                                 // 1019
      this.$element.trigger('shown.bs.' + this.type)                                                                   // 1020
    }                                                                                                                  // 1021
  }                                                                                                                    // 1022
                                                                                                                       // 1023
  Tooltip.prototype.applyPlacement = function(offset, placement) {                                                     // 1024
    var replace                                                                                                        // 1025
    var $tip   = this.tip()                                                                                            // 1026
    var width  = $tip[0].offsetWidth                                                                                   // 1027
    var height = $tip[0].offsetHeight                                                                                  // 1028
                                                                                                                       // 1029
    // manually read margins because getBoundingClientRect includes difference                                         // 1030
    var marginTop = parseInt($tip.css('margin-top'), 10)                                                               // 1031
    var marginLeft = parseInt($tip.css('margin-left'), 10)                                                             // 1032
                                                                                                                       // 1033
    // we must check for NaN for ie 8/9                                                                                // 1034
    if (isNaN(marginTop))  marginTop  = 0                                                                              // 1035
    if (isNaN(marginLeft)) marginLeft = 0                                                                              // 1036
                                                                                                                       // 1037
    offset.top  = offset.top  + marginTop                                                                              // 1038
    offset.left = offset.left + marginLeft                                                                             // 1039
                                                                                                                       // 1040
    $tip                                                                                                               // 1041
      .offset(offset)                                                                                                  // 1042
      .addClass('in')                                                                                                  // 1043
                                                                                                                       // 1044
    // check to see if placing tip in new offset caused the tip to resize itself                                       // 1045
    var actualWidth  = $tip[0].offsetWidth                                                                             // 1046
    var actualHeight = $tip[0].offsetHeight                                                                            // 1047
                                                                                                                       // 1048
    if (placement == 'top' && actualHeight != height) {                                                                // 1049
      replace = true                                                                                                   // 1050
      offset.top = offset.top + height - actualHeight                                                                  // 1051
    }                                                                                                                  // 1052
                                                                                                                       // 1053
    if (/bottom|top/.test(placement)) {                                                                                // 1054
      var delta = 0                                                                                                    // 1055
                                                                                                                       // 1056
      if (offset.left < 0) {                                                                                           // 1057
        delta       = offset.left * -2                                                                                 // 1058
        offset.left = 0                                                                                                // 1059
                                                                                                                       // 1060
        $tip.offset(offset)                                                                                            // 1061
                                                                                                                       // 1062
        actualWidth  = $tip[0].offsetWidth                                                                             // 1063
        actualHeight = $tip[0].offsetHeight                                                                            // 1064
      }                                                                                                                // 1065
                                                                                                                       // 1066
      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')                                              // 1067
    } else {                                                                                                           // 1068
      this.replaceArrow(actualHeight - height, actualHeight, 'top')                                                    // 1069
    }                                                                                                                  // 1070
                                                                                                                       // 1071
    if (replace) $tip.offset(offset)                                                                                   // 1072
  }                                                                                                                    // 1073
                                                                                                                       // 1074
  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {                                              // 1075
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')                                      // 1076
  }                                                                                                                    // 1077
                                                                                                                       // 1078
  Tooltip.prototype.setContent = function () {                                                                         // 1079
    var $tip  = this.tip()                                                                                             // 1080
    var title = this.getTitle()                                                                                        // 1081
                                                                                                                       // 1082
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)                                            // 1083
    $tip.removeClass('fade in top bottom left right')                                                                  // 1084
  }                                                                                                                    // 1085
                                                                                                                       // 1086
  Tooltip.prototype.hide = function () {                                                                               // 1087
    var that = this                                                                                                    // 1088
    var $tip = this.tip()                                                                                              // 1089
    var e    = $.Event('hide.bs.' + this.type)                                                                         // 1090
                                                                                                                       // 1091
    function complete() {                                                                                              // 1092
      if (that.hoverState != 'in') $tip.detach()                                                                       // 1093
    }                                                                                                                  // 1094
                                                                                                                       // 1095
    this.$element.trigger(e)                                                                                           // 1096
                                                                                                                       // 1097
    if (e.isDefaultPrevented()) return                                                                                 // 1098
                                                                                                                       // 1099
    $tip.removeClass('in')                                                                                             // 1100
                                                                                                                       // 1101
    $.support.transition && this.$tip.hasClass('fade') ?                                                               // 1102
      $tip                                                                                                             // 1103
        .one($.support.transition.end, complete)                                                                       // 1104
        .emulateTransitionEnd(150) :                                                                                   // 1105
      complete()                                                                                                       // 1106
                                                                                                                       // 1107
    this.$element.trigger('hidden.bs.' + this.type)                                                                    // 1108
                                                                                                                       // 1109
    return this                                                                                                        // 1110
  }                                                                                                                    // 1111
                                                                                                                       // 1112
  Tooltip.prototype.fixTitle = function () {                                                                           // 1113
    var $e = this.$element                                                                                             // 1114
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {                                      // 1115
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')                                         // 1116
    }                                                                                                                  // 1117
  }                                                                                                                    // 1118
                                                                                                                       // 1119
  Tooltip.prototype.hasContent = function () {                                                                         // 1120
    return this.getTitle()                                                                                             // 1121
  }                                                                                                                    // 1122
                                                                                                                       // 1123
  Tooltip.prototype.getPosition = function () {                                                                        // 1124
    var el = this.$element[0]                                                                                          // 1125
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {               // 1126
      width: el.offsetWidth                                                                                            // 1127
    , height: el.offsetHeight                                                                                          // 1128
    }, this.$element.offset())                                                                                         // 1129
  }                                                                                                                    // 1130
                                                                                                                       // 1131
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {                       // 1132
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }  // 1136
  }                                                                                                                    // 1137
                                                                                                                       // 1138
  Tooltip.prototype.getTitle = function () {                                                                           // 1139
    var title                                                                                                          // 1140
    var $e = this.$element                                                                                             // 1141
    var o  = this.options                                                                                              // 1142
                                                                                                                       // 1143
    title = $e.attr('data-original-title')                                                                             // 1144
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)                                               // 1145
                                                                                                                       // 1146
    return title                                                                                                       // 1147
  }                                                                                                                    // 1148
                                                                                                                       // 1149
  Tooltip.prototype.tip = function () {                                                                                // 1150
    return this.$tip = this.$tip || $(this.options.template)                                                           // 1151
  }                                                                                                                    // 1152
                                                                                                                       // 1153
  Tooltip.prototype.arrow = function () {                                                                              // 1154
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')                                              // 1155
  }                                                                                                                    // 1156
                                                                                                                       // 1157
  Tooltip.prototype.validate = function () {                                                                           // 1158
    if (!this.$element[0].parentNode) {                                                                                // 1159
      this.hide()                                                                                                      // 1160
      this.$element = null                                                                                             // 1161
      this.options  = null                                                                                             // 1162
    }                                                                                                                  // 1163
  }                                                                                                                    // 1164
                                                                                                                       // 1165
  Tooltip.prototype.enable = function () {                                                                             // 1166
    this.enabled = true                                                                                                // 1167
  }                                                                                                                    // 1168
                                                                                                                       // 1169
  Tooltip.prototype.disable = function () {                                                                            // 1170
    this.enabled = false                                                                                               // 1171
  }                                                                                                                    // 1172
                                                                                                                       // 1173
  Tooltip.prototype.toggleEnabled = function () {                                                                      // 1174
    this.enabled = !this.enabled                                                                                       // 1175
  }                                                                                                                    // 1176
                                                                                                                       // 1177
  Tooltip.prototype.toggle = function (e) {                                                                            // 1178
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this             // 1179
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)                                                    // 1180
  }                                                                                                                    // 1181
                                                                                                                       // 1182
  Tooltip.prototype.destroy = function () {                                                                            // 1183
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)                                            // 1184
  }                                                                                                                    // 1185
                                                                                                                       // 1186
                                                                                                                       // 1187
  // TOOLTIP PLUGIN DEFINITION                                                                                         // 1188
  // =========================                                                                                         // 1189
                                                                                                                       // 1190
  var old = $.fn.tooltip                                                                                               // 1191
                                                                                                                       // 1192
  $.fn.tooltip = function (option) {                                                                                   // 1193
    return this.each(function () {                                                                                     // 1194
      var $this   = $(this)                                                                                            // 1195
      var data    = $this.data('bs.tooltip')                                                                           // 1196
      var options = typeof option == 'object' && option                                                                // 1197
                                                                                                                       // 1198
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))                                         // 1199
      if (typeof option == 'string') data[option]()                                                                    // 1200
    })                                                                                                                 // 1201
  }                                                                                                                    // 1202
                                                                                                                       // 1203
  $.fn.tooltip.Constructor = Tooltip                                                                                   // 1204
                                                                                                                       // 1205
                                                                                                                       // 1206
  // TOOLTIP NO CONFLICT                                                                                               // 1207
  // ===================                                                                                               // 1208
                                                                                                                       // 1209
  $.fn.tooltip.noConflict = function () {                                                                              // 1210
    $.fn.tooltip = old                                                                                                 // 1211
    return this                                                                                                        // 1212
  }                                                                                                                    // 1213
                                                                                                                       // 1214
}(window.jQuery);                                                                                                      // 1215
                                                                                                                       // 1216
/* ========================================================================                                            // 1217
 * Bootstrap: popover.js v3.0.0                                                                                        // 1218
 * http://twbs.github.com/bootstrap/javascript.html#popovers                                                           // 1219
 * ========================================================================                                            // 1220
 * Copyright 2012 Twitter, Inc.                                                                                        // 1221
 *                                                                                                                     // 1222
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1223
 * you may not use this file except in compliance with the License.                                                    // 1224
 * You may obtain a copy of the License at                                                                             // 1225
 *                                                                                                                     // 1226
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 1227
 *                                                                                                                     // 1228
 * Unless required by applicable law or agreed to in writing, software                                                 // 1229
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1230
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1231
 * See the License for the specific language governing permissions and                                                 // 1232
 * limitations under the License.                                                                                      // 1233
 * ======================================================================== */                                         // 1234
                                                                                                                       // 1235
                                                                                                                       // 1236
+function ($) { "use strict";                                                                                          // 1237
                                                                                                                       // 1238
  // POPOVER PUBLIC CLASS DEFINITION                                                                                   // 1239
  // ===============================                                                                                   // 1240
                                                                                                                       // 1241
  var Popover = function (element, options) {                                                                          // 1242
    this.init('popover', element, options)                                                                             // 1243
  }                                                                                                                    // 1244
                                                                                                                       // 1245
  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')                                                    // 1246
                                                                                                                       // 1247
  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {                                                // 1248
    placement: 'right'                                                                                                 // 1249
  , trigger: 'click'                                                                                                   // 1250
  , content: ''                                                                                                        // 1251
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })                                                                                                                   // 1253
                                                                                                                       // 1254
                                                                                                                       // 1255
  // NOTE: POPOVER EXTENDS tooltip.js                                                                                  // 1256
  // ================================                                                                                  // 1257
                                                                                                                       // 1258
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)                                                 // 1259
                                                                                                                       // 1260
  Popover.prototype.constructor = Popover                                                                              // 1261
                                                                                                                       // 1262
  Popover.prototype.getDefaults = function () {                                                                        // 1263
    return Popover.DEFAULTS                                                                                            // 1264
  }                                                                                                                    // 1265
                                                                                                                       // 1266
  Popover.prototype.setContent = function () {                                                                         // 1267
    var $tip    = this.tip()                                                                                           // 1268
    var title   = this.getTitle()                                                                                      // 1269
    var content = this.getContent()                                                                                    // 1270
                                                                                                                       // 1271
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)                                            // 1272
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)                                        // 1273
                                                                                                                       // 1274
    $tip.removeClass('fade top bottom left right in')                                                                  // 1275
                                                                                                                       // 1276
    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do                                       // 1277
    // this manually by checking the contents.                                                                         // 1278
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()                                        // 1279
  }                                                                                                                    // 1280
                                                                                                                       // 1281
  Popover.prototype.hasContent = function () {                                                                         // 1282
    return this.getTitle() || this.getContent()                                                                        // 1283
  }                                                                                                                    // 1284
                                                                                                                       // 1285
  Popover.prototype.getContent = function () {                                                                         // 1286
    var $e = this.$element                                                                                             // 1287
    var o  = this.options                                                                                              // 1288
                                                                                                                       // 1289
    return $e.attr('data-content')                                                                                     // 1290
      || (typeof o.content == 'function' ?                                                                             // 1291
            o.content.call($e[0]) :                                                                                    // 1292
            o.content)                                                                                                 // 1293
  }                                                                                                                    // 1294
                                                                                                                       // 1295
  Popover.prototype.arrow = function () {                                                                              // 1296
    return this.$arrow = this.$arrow || this.tip().find('.arrow')                                                      // 1297
  }                                                                                                                    // 1298
                                                                                                                       // 1299
  Popover.prototype.tip = function () {                                                                                // 1300
    if (!this.$tip) this.$tip = $(this.options.template)                                                               // 1301
    return this.$tip                                                                                                   // 1302
  }                                                                                                                    // 1303
                                                                                                                       // 1304
                                                                                                                       // 1305
  // POPOVER PLUGIN DEFINITION                                                                                         // 1306
  // =========================                                                                                         // 1307
                                                                                                                       // 1308
  var old = $.fn.popover                                                                                               // 1309
                                                                                                                       // 1310
  $.fn.popover = function (option) {                                                                                   // 1311
    return this.each(function () {                                                                                     // 1312
      var $this   = $(this)                                                                                            // 1313
      var data    = $this.data('bs.popover')                                                                           // 1314
      var options = typeof option == 'object' && option                                                                // 1315
                                                                                                                       // 1316
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))                                         // 1317
      if (typeof option == 'string') data[option]()                                                                    // 1318
    })                                                                                                                 // 1319
  }                                                                                                                    // 1320
                                                                                                                       // 1321
  $.fn.popover.Constructor = Popover                                                                                   // 1322
                                                                                                                       // 1323
                                                                                                                       // 1324
  // POPOVER NO CONFLICT                                                                                               // 1325
  // ===================                                                                                               // 1326
                                                                                                                       // 1327
  $.fn.popover.noConflict = function () {                                                                              // 1328
    $.fn.popover = old                                                                                                 // 1329
    return this                                                                                                        // 1330
  }                                                                                                                    // 1331
                                                                                                                       // 1332
}(window.jQuery);                                                                                                      // 1333
                                                                                                                       // 1334
/* ========================================================================                                            // 1335
 * Bootstrap: tab.js v3.0.0                                                                                            // 1336
 * http://twbs.github.com/bootstrap/javascript.html#tabs                                                               // 1337
 * ========================================================================                                            // 1338
 * Copyright 2012 Twitter, Inc.                                                                                        // 1339
 *                                                                                                                     // 1340
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1341
 * you may not use this file except in compliance with the License.                                                    // 1342
 * You may obtain a copy of the License at                                                                             // 1343
 *                                                                                                                     // 1344
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 1345
 *                                                                                                                     // 1346
 * Unless required by applicable law or agreed to in writing, software                                                 // 1347
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1348
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1349
 * See the License for the specific language governing permissions and                                                 // 1350
 * limitations under the License.                                                                                      // 1351
 * ======================================================================== */                                         // 1352
                                                                                                                       // 1353
                                                                                                                       // 1354
+function ($) { "use strict";                                                                                          // 1355
                                                                                                                       // 1356
  // TAB CLASS DEFINITION                                                                                              // 1357
  // ====================                                                                                              // 1358
                                                                                                                       // 1359
  var Tab = function (element) {                                                                                       // 1360
    this.element = $(element)                                                                                          // 1361
  }                                                                                                                    // 1362
                                                                                                                       // 1363
  Tab.prototype.show = function () {                                                                                   // 1364
    var $this    = this.element                                                                                        // 1365
    var $ul      = $this.closest('ul:not(.dropdown-menu)')                                                             // 1366
    var selector = $this.attr('data-target')                                                                           // 1367
                                                                                                                       // 1368
    if (!selector) {                                                                                                   // 1369
      selector = $this.attr('href')                                                                                    // 1370
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7                                    // 1371
    }                                                                                                                  // 1372
                                                                                                                       // 1373
    if ($this.parent('li').hasClass('active')) return                                                                  // 1374
                                                                                                                       // 1375
    var previous = $ul.find('.active:last a')[0]                                                                       // 1376
    var e        = $.Event('show.bs.tab', {                                                                            // 1377
      relatedTarget: previous                                                                                          // 1378
    })                                                                                                                 // 1379
                                                                                                                       // 1380
    $this.trigger(e)                                                                                                   // 1381
                                                                                                                       // 1382
    if (e.isDefaultPrevented()) return                                                                                 // 1383
                                                                                                                       // 1384
    var $target = $(selector)                                                                                          // 1385
                                                                                                                       // 1386
    this.activate($this.parent('li'), $ul)                                                                             // 1387
    this.activate($target, $target.parent(), function () {                                                             // 1388
      $this.trigger({                                                                                                  // 1389
        type: 'shown.bs.tab'                                                                                           // 1390
      , relatedTarget: previous                                                                                        // 1391
      })                                                                                                               // 1392
    })                                                                                                                 // 1393
  }                                                                                                                    // 1394
                                                                                                                       // 1395
  Tab.prototype.activate = function (element, container, callback) {                                                   // 1396
    var $active    = container.find('> .active')                                                                       // 1397
    var transition = callback                                                                                          // 1398
      && $.support.transition                                                                                          // 1399
      && $active.hasClass('fade')                                                                                      // 1400
                                                                                                                       // 1401
    function next() {                                                                                                  // 1402
      $active                                                                                                          // 1403
        .removeClass('active')                                                                                         // 1404
        .find('> .dropdown-menu > .active')                                                                            // 1405
        .removeClass('active')                                                                                         // 1406
                                                                                                                       // 1407
      element.addClass('active')                                                                                       // 1408
                                                                                                                       // 1409
      if (transition) {                                                                                                // 1410
        element[0].offsetWidth // reflow for transition                                                                // 1411
        element.addClass('in')                                                                                         // 1412
      } else {                                                                                                         // 1413
        element.removeClass('fade')                                                                                    // 1414
      }                                                                                                                // 1415
                                                                                                                       // 1416
      if (element.parent('.dropdown-menu')) {                                                                          // 1417
        element.closest('li.dropdown').addClass('active')                                                              // 1418
      }                                                                                                                // 1419
                                                                                                                       // 1420
      callback && callback()                                                                                           // 1421
    }                                                                                                                  // 1422
                                                                                                                       // 1423
    transition ?                                                                                                       // 1424
      $active                                                                                                          // 1425
        .one($.support.transition.end, next)                                                                           // 1426
        .emulateTransitionEnd(150) :                                                                                   // 1427
      next()                                                                                                           // 1428
                                                                                                                       // 1429
    $active.removeClass('in')                                                                                          // 1430
  }                                                                                                                    // 1431
                                                                                                                       // 1432
                                                                                                                       // 1433
  // TAB PLUGIN DEFINITION                                                                                             // 1434
  // =====================                                                                                             // 1435
                                                                                                                       // 1436
  var old = $.fn.tab                                                                                                   // 1437
                                                                                                                       // 1438
  $.fn.tab = function ( option ) {                                                                                     // 1439
    return this.each(function () {                                                                                     // 1440
      var $this = $(this)                                                                                              // 1441
      var data  = $this.data('bs.tab')                                                                                 // 1442
                                                                                                                       // 1443
      if (!data) $this.data('bs.tab', (data = new Tab(this)))                                                          // 1444
      if (typeof option == 'string') data[option]()                                                                    // 1445
    })                                                                                                                 // 1446
  }                                                                                                                    // 1447
                                                                                                                       // 1448
  $.fn.tab.Constructor = Tab                                                                                           // 1449
                                                                                                                       // 1450
                                                                                                                       // 1451
  // TAB NO CONFLICT                                                                                                   // 1452
  // ===============                                                                                                   // 1453
                                                                                                                       // 1454
  $.fn.tab.noConflict = function () {                                                                                  // 1455
    $.fn.tab = old                                                                                                     // 1456
    return this                                                                                                        // 1457
  }                                                                                                                    // 1458
                                                                                                                       // 1459
                                                                                                                       // 1460
  // TAB DATA-API                                                                                                      // 1461
  // ============                                                                                                      // 1462
                                                                                                                       // 1463
  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {                  // 1464
    e.preventDefault()                                                                                                 // 1465
    $(this).tab('show')                                                                                                // 1466
  })                                                                                                                   // 1467
                                                                                                                       // 1468
}(window.jQuery);                                                                                                      // 1469
                                                                                                                       // 1470
/* ========================================================================                                            // 1471
 * Bootstrap: affix.js v3.0.0                                                                                          // 1472
 * http://twbs.github.com/bootstrap/javascript.html#affix                                                              // 1473
 * ========================================================================                                            // 1474
 * Copyright 2012 Twitter, Inc.                                                                                        // 1475
 *                                                                                                                     // 1476
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1477
 * you may not use this file except in compliance with the License.                                                    // 1478
 * You may obtain a copy of the License at                                                                             // 1479
 *                                                                                                                     // 1480
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 1481
 *                                                                                                                     // 1482
 * Unless required by applicable law or agreed to in writing, software                                                 // 1483
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1484
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1485
 * See the License for the specific language governing permissions and                                                 // 1486
 * limitations under the License.                                                                                      // 1487
 * ======================================================================== */                                         // 1488
                                                                                                                       // 1489
                                                                                                                       // 1490
+function ($) { "use strict";                                                                                          // 1491
                                                                                                                       // 1492
  // AFFIX CLASS DEFINITION                                                                                            // 1493
  // ======================                                                                                            // 1494
                                                                                                                       // 1495
  var Affix = function (element, options) {                                                                            // 1496
    this.options = $.extend({}, Affix.DEFAULTS, options)                                                               // 1497
    this.$window = $(window)                                                                                           // 1498
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))                                               // 1499
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))                                  // 1500
                                                                                                                       // 1501
    this.$element = $(element)                                                                                         // 1502
    this.affixed  =                                                                                                    // 1503
    this.unpin    = null                                                                                               // 1504
                                                                                                                       // 1505
    this.checkPosition()                                                                                               // 1506
  }                                                                                                                    // 1507
                                                                                                                       // 1508
  Affix.RESET = 'affix affix-top affix-bottom'                                                                         // 1509
                                                                                                                       // 1510
  Affix.DEFAULTS = {                                                                                                   // 1511
    offset: 0                                                                                                          // 1512
  }                                                                                                                    // 1513
                                                                                                                       // 1514
  Affix.prototype.checkPositionWithEventLoop = function () {                                                           // 1515
    setTimeout($.proxy(this.checkPosition, this), 1)                                                                   // 1516
  }                                                                                                                    // 1517
                                                                                                                       // 1518
  Affix.prototype.checkPosition = function () {                                                                        // 1519
    if (!this.$element.is(':visible')) return                                                                          // 1520
                                                                                                                       // 1521
    var scrollHeight = $(document).height()                                                                            // 1522
    var scrollTop    = this.$window.scrollTop()                                                                        // 1523
    var position     = this.$element.offset()                                                                          // 1524
    var offset       = this.options.offset                                                                             // 1525
    var offsetTop    = offset.top                                                                                      // 1526
    var offsetBottom = offset.bottom                                                                                   // 1527
                                                                                                                       // 1528
    if (typeof offset != 'object')         offsetBottom = offsetTop = offset                                           // 1529
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()                                                 // 1530
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()                                              // 1531
                                                                                                                       // 1532
    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :                             // 1533
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false                                       // 1535
                                                                                                                       // 1536
    if (this.affixed === affix) return                                                                                 // 1537
    if (this.unpin) this.$element.css('top', '')                                                                       // 1538
                                                                                                                       // 1539
    this.affixed = affix                                                                                               // 1540
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null                                                 // 1541
                                                                                                                       // 1542
    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))                              // 1543
                                                                                                                       // 1544
    if (affix == 'bottom') {                                                                                           // 1545
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })                // 1546
    }                                                                                                                  // 1547
  }                                                                                                                    // 1548
                                                                                                                       // 1549
                                                                                                                       // 1550
  // AFFIX PLUGIN DEFINITION                                                                                           // 1551
  // =======================                                                                                           // 1552
                                                                                                                       // 1553
  var old = $.fn.affix                                                                                                 // 1554
                                                                                                                       // 1555
  $.fn.affix = function (option) {                                                                                     // 1556
    return this.each(function () {                                                                                     // 1557
      var $this   = $(this)                                                                                            // 1558
      var data    = $this.data('bs.affix')                                                                             // 1559
      var options = typeof option == 'object' && option                                                                // 1560
                                                                                                                       // 1561
      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))                                             // 1562
      if (typeof option == 'string') data[option]()                                                                    // 1563
    })                                                                                                                 // 1564
  }                                                                                                                    // 1565
                                                                                                                       // 1566
  $.fn.affix.Constructor = Affix                                                                                       // 1567
                                                                                                                       // 1568
                                                                                                                       // 1569
  // AFFIX NO CONFLICT                                                                                                 // 1570
  // =================                                                                                                 // 1571
                                                                                                                       // 1572
  $.fn.affix.noConflict = function () {                                                                                // 1573
    $.fn.affix = old                                                                                                   // 1574
    return this                                                                                                        // 1575
  }                                                                                                                    // 1576
                                                                                                                       // 1577
                                                                                                                       // 1578
  // AFFIX DATA-API                                                                                                    // 1579
  // ==============                                                                                                    // 1580
                                                                                                                       // 1581
  $(window).on('load', function () {                                                                                   // 1582
    $('[data-spy="affix"]').each(function () {                                                                         // 1583
      var $spy = $(this)                                                                                               // 1584
      var data = $spy.data()                                                                                           // 1585
                                                                                                                       // 1586
      data.offset = data.offset || {}                                                                                  // 1587
                                                                                                                       // 1588
      if (data.offsetBottom) data.offset.bottom = data.offsetBottom                                                    // 1589
      if (data.offsetTop)    data.offset.top    = data.offsetTop                                                       // 1590
                                                                                                                       // 1591
      $spy.affix(data)                                                                                                 // 1592
    })                                                                                                                 // 1593
  })                                                                                                                   // 1594
                                                                                                                       // 1595
}(window.jQuery);                                                                                                      // 1596
                                                                                                                       // 1597
/* ========================================================================                                            // 1598
 * Bootstrap: collapse.js v3.0.0                                                                                       // 1599
 * http://twbs.github.com/bootstrap/javascript.html#collapse                                                           // 1600
 * ========================================================================                                            // 1601
 * Copyright 2012 Twitter, Inc.                                                                                        // 1602
 *                                                                                                                     // 1603
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1604
 * you may not use this file except in compliance with the License.                                                    // 1605
 * You may obtain a copy of the License at                                                                             // 1606
 *                                                                                                                     // 1607
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 1608
 *                                                                                                                     // 1609
 * Unless required by applicable law or agreed to in writing, software                                                 // 1610
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1611
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1612
 * See the License for the specific language governing permissions and                                                 // 1613
 * limitations under the License.                                                                                      // 1614
 * ======================================================================== */                                         // 1615
                                                                                                                       // 1616
                                                                                                                       // 1617
+function ($) { "use strict";                                                                                          // 1618
                                                                                                                       // 1619
  // COLLAPSE PUBLIC CLASS DEFINITION                                                                                  // 1620
  // ================================                                                                                  // 1621
                                                                                                                       // 1622
  var Collapse = function (element, options) {                                                                         // 1623
    this.$element      = $(element)                                                                                    // 1624
    this.options       = $.extend({}, Collapse.DEFAULTS, options)                                                      // 1625
    this.transitioning = null                                                                                          // 1626
                                                                                                                       // 1627
    if (this.options.parent) this.$parent = $(this.options.parent)                                                     // 1628
    if (this.options.toggle) this.toggle()                                                                             // 1629
  }                                                                                                                    // 1630
                                                                                                                       // 1631
  Collapse.DEFAULTS = {                                                                                                // 1632
    toggle: true                                                                                                       // 1633
  }                                                                                                                    // 1634
                                                                                                                       // 1635
  Collapse.prototype.dimension = function () {                                                                         // 1636
    var hasWidth = this.$element.hasClass('width')                                                                     // 1637
    return hasWidth ? 'width' : 'height'                                                                               // 1638
  }                                                                                                                    // 1639
                                                                                                                       // 1640
  Collapse.prototype.show = function () {                                                                              // 1641
    if (this.transitioning || this.$element.hasClass('in')) return                                                     // 1642
                                                                                                                       // 1643
    var startEvent = $.Event('show.bs.collapse')                                                                       // 1644
    this.$element.trigger(startEvent)                                                                                  // 1645
    if (startEvent.isDefaultPrevented()) return                                                                        // 1646
                                                                                                                       // 1647
    var actives = this.$parent && this.$parent.find('> .panel > .in')                                                  // 1648
                                                                                                                       // 1649
    if (actives && actives.length) {                                                                                   // 1650
      var hasData = actives.data('bs.collapse')                                                                        // 1651
      if (hasData && hasData.transitioning) return                                                                     // 1652
      actives.collapse('hide')                                                                                         // 1653
      hasData || actives.data('bs.collapse', null)                                                                     // 1654
    }                                                                                                                  // 1655
                                                                                                                       // 1656
    var dimension = this.dimension()                                                                                   // 1657
                                                                                                                       // 1658
    this.$element                                                                                                      // 1659
      .removeClass('collapse')                                                                                         // 1660
      .addClass('collapsing')                                                                                          // 1661
      [dimension](0)                                                                                                   // 1662
                                                                                                                       // 1663
    this.transitioning = 1                                                                                             // 1664
                                                                                                                       // 1665
    var complete = function () {                                                                                       // 1666
      this.$element                                                                                                    // 1667
        .removeClass('collapsing')                                                                                     // 1668
        .addClass('in')                                                                                                // 1669
        [dimension]('auto')                                                                                            // 1670
      this.transitioning = 0                                                                                           // 1671
      this.$element.trigger('shown.bs.collapse')                                                                       // 1672
    }                                                                                                                  // 1673
                                                                                                                       // 1674
    if (!$.support.transition) return complete.call(this)                                                              // 1675
                                                                                                                       // 1676
    var scrollSize = $.camelCase(['scroll', dimension].join('-'))                                                      // 1677
                                                                                                                       // 1678
    this.$element                                                                                                      // 1679
      .one($.support.transition.end, $.proxy(complete, this))                                                          // 1680
      .emulateTransitionEnd(350)                                                                                       // 1681
      [dimension](this.$element[0][scrollSize])                                                                        // 1682
  }                                                                                                                    // 1683
                                                                                                                       // 1684
  Collapse.prototype.hide = function () {                                                                              // 1685
    if (this.transitioning || !this.$element.hasClass('in')) return                                                    // 1686
                                                                                                                       // 1687
    var startEvent = $.Event('hide.bs.collapse')                                                                       // 1688
    this.$element.trigger(startEvent)                                                                                  // 1689
    if (startEvent.isDefaultPrevented()) return                                                                        // 1690
                                                                                                                       // 1691
    var dimension = this.dimension()                                                                                   // 1692
                                                                                                                       // 1693
    this.$element                                                                                                      // 1694
      [dimension](this.$element[dimension]())                                                                          // 1695
      [0].offsetHeight                                                                                                 // 1696
                                                                                                                       // 1697
    this.$element                                                                                                      // 1698
      .addClass('collapsing')                                                                                          // 1699
      .removeClass('collapse')                                                                                         // 1700
      .removeClass('in')                                                                                               // 1701
                                                                                                                       // 1702
    this.transitioning = 1                                                                                             // 1703
                                                                                                                       // 1704
    var complete = function () {                                                                                       // 1705
      this.transitioning = 0                                                                                           // 1706
      this.$element                                                                                                    // 1707
        .trigger('hidden.bs.collapse')                                                                                 // 1708
        .removeClass('collapsing')                                                                                     // 1709
        .addClass('collapse')                                                                                          // 1710
    }                                                                                                                  // 1711
                                                                                                                       // 1712
    if (!$.support.transition) return complete.call(this)                                                              // 1713
                                                                                                                       // 1714
    this.$element                                                                                                      // 1715
      [dimension](0)                                                                                                   // 1716
      .one($.support.transition.end, $.proxy(complete, this))                                                          // 1717
      .emulateTransitionEnd(350)                                                                                       // 1718
  }                                                                                                                    // 1719
                                                                                                                       // 1720
  Collapse.prototype.toggle = function () {                                                                            // 1721
    this[this.$element.hasClass('in') ? 'hide' : 'show']()                                                             // 1722
  }                                                                                                                    // 1723
                                                                                                                       // 1724
                                                                                                                       // 1725
  // COLLAPSE PLUGIN DEFINITION                                                                                        // 1726
  // ==========================                                                                                        // 1727
                                                                                                                       // 1728
  var old = $.fn.collapse                                                                                              // 1729
                                                                                                                       // 1730
  $.fn.collapse = function (option) {                                                                                  // 1731
    return this.each(function () {                                                                                     // 1732
      var $this   = $(this)                                                                                            // 1733
      var data    = $this.data('bs.collapse')                                                                          // 1734
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)                 // 1735
                                                                                                                       // 1736
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))                                       // 1737
      if (typeof option == 'string') data[option]()                                                                    // 1738
    })                                                                                                                 // 1739
  }                                                                                                                    // 1740
                                                                                                                       // 1741
  $.fn.collapse.Constructor = Collapse                                                                                 // 1742
                                                                                                                       // 1743
                                                                                                                       // 1744
  // COLLAPSE NO CONFLICT                                                                                              // 1745
  // ====================                                                                                              // 1746
                                                                                                                       // 1747
  $.fn.collapse.noConflict = function () {                                                                             // 1748
    $.fn.collapse = old                                                                                                // 1749
    return this                                                                                                        // 1750
  }                                                                                                                    // 1751
                                                                                                                       // 1752
                                                                                                                       // 1753
  // COLLAPSE DATA-API                                                                                                 // 1754
  // =================                                                                                                 // 1755
                                                                                                                       // 1756
  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {                                // 1757
    var $this   = $(this), href                                                                                        // 1758
    var target  = $this.attr('data-target')                                                                            // 1759
        || e.preventDefault()                                                                                          // 1760
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7                           // 1761
    var $target = $(target)                                                                                            // 1762
    var data    = $target.data('bs.collapse')                                                                          // 1763
    var option  = data ? 'toggle' : $this.data()                                                                       // 1764
    var parent  = $this.attr('data-parent')                                                                            // 1765
    var $parent = parent && $(parent)                                                                                  // 1766
                                                                                                                       // 1767
    if (!data || !data.transitioning) {                                                                                // 1768
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')                                          // 1770
    }                                                                                                                  // 1771
                                                                                                                       // 1772
    $target.collapse(option)                                                                                           // 1773
  })                                                                                                                   // 1774
                                                                                                                       // 1775
}(window.jQuery);                                                                                                      // 1776
                                                                                                                       // 1777
/* ========================================================================                                            // 1778
 * Bootstrap: scrollspy.js v3.0.0                                                                                      // 1779
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy                                                          // 1780
 * ========================================================================                                            // 1781
 * Copyright 2012 Twitter, Inc.                                                                                        // 1782
 *                                                                                                                     // 1783
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1784
 * you may not use this file except in compliance with the License.                                                    // 1785
 * You may obtain a copy of the License at                                                                             // 1786
 *                                                                                                                     // 1787
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 1788
 *                                                                                                                     // 1789
 * Unless required by applicable law or agreed to in writing, software                                                 // 1790
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1791
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1792
 * See the License for the specific language governing permissions and                                                 // 1793
 * limitations under the License.                                                                                      // 1794
 * ======================================================================== */                                         // 1795
                                                                                                                       // 1796
                                                                                                                       // 1797
+function ($) { "use strict";                                                                                          // 1798
                                                                                                                       // 1799
  // SCROLLSPY CLASS DEFINITION                                                                                        // 1800
  // ==========================                                                                                        // 1801
                                                                                                                       // 1802
  function ScrollSpy(element, options) {                                                                               // 1803
    var href                                                                                                           // 1804
    var process  = $.proxy(this.process, this)                                                                         // 1805
                                                                                                                       // 1806
    this.$element       = $(element).is('body') ? $(window) : $(element)                                               // 1807
    this.$body          = $('body')                                                                                    // 1808
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)                                   // 1809
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)                                                    // 1810
    this.selector       = (this.options.target                                                                         // 1811
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7                      // 1812
      || '') + ' .nav li > a'                                                                                          // 1813
    this.offsets        = $([])                                                                                        // 1814
    this.targets        = $([])                                                                                        // 1815
    this.activeTarget   = null                                                                                         // 1816
                                                                                                                       // 1817
    this.refresh()                                                                                                     // 1818
    this.process()                                                                                                     // 1819
  }                                                                                                                    // 1820
                                                                                                                       // 1821
  ScrollSpy.DEFAULTS = {                                                                                               // 1822
    offset: 10                                                                                                         // 1823
  }                                                                                                                    // 1824
                                                                                                                       // 1825
  ScrollSpy.prototype.refresh = function () {                                                                          // 1826
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'                                              // 1827
                                                                                                                       // 1828
    this.offsets = $([])                                                                                               // 1829
    this.targets = $([])                                                                                               // 1830
                                                                                                                       // 1831
    var self     = this                                                                                                // 1832
    var $targets = this.$body                                                                                          // 1833
      .find(this.selector)                                                                                             // 1834
      .map(function () {                                                                                               // 1835
        var $el   = $(this)                                                                                            // 1836
        var href  = $el.data('target') || $el.attr('href')                                                             // 1837
        var $href = /^#\w/.test(href) && $(href)                                                                       // 1838
                                                                                                                       // 1839
        return ($href                                                                                                  // 1840
          && $href.length                                                                                              // 1841
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })                                                                                                               // 1843
      .sort(function (a, b) { return a[0] - b[0] })                                                                    // 1844
      .each(function () {                                                                                              // 1845
        self.offsets.push(this[0])                                                                                     // 1846
        self.targets.push(this[1])                                                                                     // 1847
      })                                                                                                               // 1848
  }                                                                                                                    // 1849
                                                                                                                       // 1850
  ScrollSpy.prototype.process = function () {                                                                          // 1851
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset                                           // 1852
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight                               // 1853
    var maxScroll    = scrollHeight - this.$scrollElement.height()                                                     // 1854
    var offsets      = this.offsets                                                                                    // 1855
    var targets      = this.targets                                                                                    // 1856
    var activeTarget = this.activeTarget                                                                               // 1857
    var i                                                                                                              // 1858
                                                                                                                       // 1859
    if (scrollTop >= maxScroll) {                                                                                      // 1860
      return activeTarget != (i = targets.last()[0]) && this.activate(i)                                               // 1861
    }                                                                                                                  // 1862
                                                                                                                       // 1863
    for (i = offsets.length; i--;) {                                                                                   // 1864
      activeTarget != targets[i]                                                                                       // 1865
        && scrollTop >= offsets[i]                                                                                     // 1866
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])                                                            // 1867
        && this.activate( targets[i] )                                                                                 // 1868
    }                                                                                                                  // 1869
  }                                                                                                                    // 1870
                                                                                                                       // 1871
  ScrollSpy.prototype.activate = function (target) {                                                                   // 1872
    this.activeTarget = target                                                                                         // 1873
                                                                                                                       // 1874
    $(this.selector)                                                                                                   // 1875
      .parents('.active')                                                                                              // 1876
      .removeClass('active')                                                                                           // 1877
                                                                                                                       // 1878
    var selector = this.selector                                                                                       // 1879
      + '[data-target="' + target + '"],'                                                                              // 1880
      + this.selector + '[href="' + target + '"]'                                                                      // 1881
                                                                                                                       // 1882
    var active = $(selector)                                                                                           // 1883
      .parents('li')                                                                                                   // 1884
      .addClass('active')                                                                                              // 1885
                                                                                                                       // 1886
    if (active.parent('.dropdown-menu').length)  {                                                                     // 1887
      active = active                                                                                                  // 1888
        .closest('li.dropdown')                                                                                        // 1889
        .addClass('active')                                                                                            // 1890
    }                                                                                                                  // 1891
                                                                                                                       // 1892
    active.trigger('activate')                                                                                         // 1893
  }                                                                                                                    // 1894
                                                                                                                       // 1895
                                                                                                                       // 1896
  // SCROLLSPY PLUGIN DEFINITION                                                                                       // 1897
  // ===========================                                                                                       // 1898
                                                                                                                       // 1899
  var old = $.fn.scrollspy                                                                                             // 1900
                                                                                                                       // 1901
  $.fn.scrollspy = function (option) {                                                                                 // 1902
    return this.each(function () {                                                                                     // 1903
      var $this   = $(this)                                                                                            // 1904
      var data    = $this.data('bs.scrollspy')                                                                         // 1905
      var options = typeof option == 'object' && option                                                                // 1906
                                                                                                                       // 1907
      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))                                     // 1908
      if (typeof option == 'string') data[option]()                                                                    // 1909
    })                                                                                                                 // 1910
  }                                                                                                                    // 1911
                                                                                                                       // 1912
  $.fn.scrollspy.Constructor = ScrollSpy                                                                               // 1913
                                                                                                                       // 1914
                                                                                                                       // 1915
  // SCROLLSPY NO CONFLICT                                                                                             // 1916
  // =====================                                                                                             // 1917
                                                                                                                       // 1918
  $.fn.scrollspy.noConflict = function () {                                                                            // 1919
    $.fn.scrollspy = old                                                                                               // 1920
    return this                                                                                                        // 1921
  }                                                                                                                    // 1922
                                                                                                                       // 1923
                                                                                                                       // 1924
  // SCROLLSPY DATA-API                                                                                                // 1925
  // ==================                                                                                                // 1926
                                                                                                                       // 1927
  $(window).on('load', function () {                                                                                   // 1928
    $('[data-spy="scroll"]').each(function () {                                                                        // 1929
      var $spy = $(this)                                                                                               // 1930
      $spy.scrollspy($spy.data())                                                                                      // 1931
    })                                                                                                                 // 1932
  })                                                                                                                   // 1933
                                                                                                                       // 1934
}(window.jQuery);                                                                                                      // 1935
                                                                                                                       // 1936
/* ========================================================================                                            // 1937
 * Bootstrap: transition.js v3.0.0                                                                                     // 1938
 * http://twbs.github.com/bootstrap/javascript.html#transitions                                                        // 1939
 * ========================================================================                                            // 1940
 * Copyright 2013 Twitter, Inc.                                                                                        // 1941
 *                                                                                                                     // 1942
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1943
 * you may not use this file except in compliance with the License.                                                    // 1944
 * You may obtain a copy of the License at                                                                             // 1945
 *                                                                                                                     // 1946
 * http://www.apache.org/licenses/LICENSE-2.0                                                                          // 1947
 *                                                                                                                     // 1948
 * Unless required by applicable law or agreed to in writing, software                                                 // 1949
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1950
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1951
 * See the License for the specific language governing permissions and                                                 // 1952
 * limitations under the License.                                                                                      // 1953
 * ======================================================================== */                                         // 1954
                                                                                                                       // 1955
                                                                                                                       // 1956
+function ($) { "use strict";                                                                                          // 1957
                                                                                                                       // 1958
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)                                                      // 1959
  // ============================================================                                                      // 1960
                                                                                                                       // 1961
  function transitionEnd() {                                                                                           // 1962
    var el = document.createElement('bootstrap')                                                                       // 1963
                                                                                                                       // 1964
    var transEndEventNames = {                                                                                         // 1965
      'WebkitTransition' : 'webkitTransitionEnd'                                                                       // 1966
    , 'MozTransition'    : 'transitionend'                                                                             // 1967
    , 'OTransition'      : 'oTransitionEnd otransitionend'                                                             // 1968
    , 'transition'       : 'transitionend'                                                                             // 1969
    }                                                                                                                  // 1970
                                                                                                                       // 1971
    for (var name in transEndEventNames) {                                                                             // 1972
      if (el.style[name] !== undefined) {                                                                              // 1973
        return { end: transEndEventNames[name] }                                                                       // 1974
      }                                                                                                                // 1975
    }                                                                                                                  // 1976
  }                                                                                                                    // 1977
                                                                                                                       // 1978
  // http://blog.alexmaccaw.com/css-transitions                                                                        // 1979
  $.fn.emulateTransitionEnd = function (duration) {                                                                    // 1980
    var called = false, $el = this                                                                                     // 1981
    $(this).one($.support.transition.end, function () { called = true })                                               // 1982
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }                               // 1983
    setTimeout(callback, duration)                                                                                     // 1984
    return this                                                                                                        // 1985
  }                                                                                                                    // 1986
                                                                                                                       // 1987
  $(function () {                                                                                                      // 1988
    $.support.transition = transitionEnd()                                                                             // 1989
  })                                                                                                                   // 1990
                                                                                                                       // 1991
}(window.jQuery);                                                                                                      // 1992
                                                                                                                       // 1993
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/bootstrap-3/bootstrap-3/js/jquery-ui-1.10.2.custom.min.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! jQuery UI - v1.10.2 - 2013-04-17                                                                                   // 1
* http://jqueryui.com                                                                                                  // 2
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.slider.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */                                              // 4
                                                                                                                       // 5
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),i.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i,s=this,n=!1,a=!1;for(e.ui.ddmanager&&!this.options.dropBehaviour&&(a=e.ui.ddmanager.drop(this,t)),this.dropped&&(a=this.dropped,this.dropped=!1),i=this.element[0];i&&(i=i.parentNode);)i===document&&(n=!0);return n||"original"!==this.options.helper?("invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,a)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;if("parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=["document"===n.containment?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"===n.containment?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"===n.containment?0:e(window).scrollLeft())+e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"===n.containment?0:e(window).scrollTop())+(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||n.containment.constructor===Array)n.containment.constructor===Array&&(this.containment=n.containment);else{if(i=e(n.containment),s=i[0],!s)return;t="hidden"!==e(s).css("overflow"),this.containment=[(parseInt(e(s).css("borderLeftWidth"),10)||0)+(parseInt(e(s).css("paddingLeft"),10)||0),(parseInt(e(s).css("borderTopWidth"),10)||0)+(parseInt(e(s).css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(e(s).css("borderRightWidth"),10)||0)-(parseInt(e(s).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(e(s).css("borderBottomWidth"),10)||0)-(parseInt(e(s).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i}},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName),l=t.pageX,u=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,g>r-m&&h+m>g&&y>l-m&&u+m>y||g>r-m&&h+m>g&&b>l-m&&u+m>b||v>r-m&&h+m>v&&y>l-m&&u+m>y||v>r-m&&h+m>v&&b>l-m&&u+m>b?("inner"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d):(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/bootstrap-3/bootstrap-3/js/jquery.knob.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!jQuery Knob*/                                                                                                       // 1
/**                                                                                                                    // 2
 * Downward compatible, touchable dial                                                                                 // 3
 *                                                                                                                     // 4
 * Version: 1.2.0 (15/07/2012)                                                                                         // 5
 * Requires: jQuery v1.7+                                                                                              // 6
 *                                                                                                                     // 7
 * Copyright (c) 2012 Anthony Terrien                                                                                  // 8
 * Under MIT and GPL licenses:                                                                                         // 9
 *  http://www.opensource.org/licenses/mit-license.php                                                                 // 10
 *  http://www.gnu.org/licenses/gpl.html                                                                               // 11
 *                                                                                                                     // 12
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC                                                                   // 13
 */                                                                                                                    // 14
(function($) {                                                                                                         // 15
                                                                                                                       // 16
    /**                                                                                                                // 17
     * Kontrol library                                                                                                 // 18
     */                                                                                                                // 19
    "use strict";                                                                                                      // 20
                                                                                                                       // 21
    /**                                                                                                                // 22
     * Definition of globals and core                                                                                  // 23
     */                                                                                                                // 24
    var k = {}, // kontrol                                                                                             // 25
        max = Math.max,                                                                                                // 26
        min = Math.min;                                                                                                // 27
                                                                                                                       // 28
    k.c = {};                                                                                                          // 29
    k.c.d = $(document);                                                                                               // 30
    k.c.t = function (e) {                                                                                             // 31
        return e.originalEvent.touches.length - 1;                                                                     // 32
    };                                                                                                                 // 33
                                                                                                                       // 34
    /**                                                                                                                // 35
     * Kontrol Object                                                                                                  // 36
     *                                                                                                                 // 37
     * Definition of an abstract UI control                                                                            // 38
     *                                                                                                                 // 39
     * Each concrete component must call this one.                                                                     // 40
     * <code>                                                                                                          // 41
     * k.o.call(this);                                                                                                 // 42
     * </code>                                                                                                         // 43
     */                                                                                                                // 44
    k.o = function () {                                                                                                // 45
        var s = this;                                                                                                  // 46
                                                                                                                       // 47
        this.o = null; // array of options                                                                             // 48
        this.$ = null; // jQuery wrapped element                                                                       // 49
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement                                          // 50
        this.g = null; // 2D graphics context for 'pre-rendering'                                                      // 51
        this.v = null; // value ; mixed array or integer                                                               // 52
        this.cv = null; // change value ; not commited value                                                           // 53
        this.x = 0; // canvas x position                                                                               // 54
        this.y = 0; // canvas y position                                                                               // 55
        this.$c = null; // jQuery canvas element                                                                       // 56
        this.c = null; // rendered canvas context                                                                      // 57
        this.t = 0; // touches index                                                                                   // 58
        this.isInit = false;                                                                                           // 59
        this.fgColor = null; // main color                                                                             // 60
        this.pColor = null; // previous color                                                                          // 61
        this.dH = null; // draw hook                                                                                   // 62
        this.cH = null; // change hook                                                                                 // 63
        this.eH = null; // cancel hook                                                                                 // 64
        this.rH = null; // release hook                                                                                // 65
                                                                                                                       // 66
        this.run = function () {                                                                                       // 67
            var cf = function (e, conf) {                                                                              // 68
                var k;                                                                                                 // 69
                for (k in conf) {                                                                                      // 70
                    s.o[k] = conf[k];                                                                                  // 71
                }                                                                                                      // 72
                s.init();                                                                                              // 73
                s._configure()                                                                                         // 74
                 ._draw();                                                                                             // 75
            };                                                                                                         // 76
                                                                                                                       // 77
            if(this.$.data('kontroled')) return;                                                                       // 78
            this.$.data('kontroled', true);                                                                            // 79
                                                                                                                       // 80
            this.extend();                                                                                             // 81
            this.o = $.extend(                                                                                         // 82
                {                                                                                                      // 83
                    // Config                                                                                          // 84
                    min : this.$.data('min') || 0,                                                                     // 85
                    max : this.$.data('max') || 100,                                                                   // 86
                    stopper : true,                                                                                    // 87
                    readOnly : this.$.data('readonly'),                                                                // 88
                                                                                                                       // 89
                    // UI                                                                                              // 90
                    cursor : (this.$.data('cursor') === true && 30)                                                    // 91
                                || this.$.data('cursor')                                                               // 92
                                || 0,                                                                                  // 93
                    thickness : this.$.data('thickness') || 0.35,                                                      // 94
                    lineCap : this.$.data('linecap') || 'butt',                                                        // 95
                    width : this.$.data('width') || 200,                                                               // 96
                    height : this.$.data('height') || 200,                                                             // 97
                    displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),                 // 98
                    displayPrevious : this.$.data('displayprevious'),                                                  // 99
                    fgColor : this.$.data('fgcolor') || '#87CEEB',                                                     // 100
                    inputColor: this.$.data('inputcolor') || this.$.data('fgcolor') || '#87CEEB',                      // 101
                    inline : false,                                                                                    // 102
                    step : this.$.data('step') || 1,                                                                   // 103
                                                                                                                       // 104
                    // Hooks                                                                                           // 105
                    draw : null, // function () {}                                                                     // 106
                    change : null, // function (value) {}                                                              // 107
                    cancel : null, // function () {}                                                                   // 108
                    release : null // function (value) {}                                                              // 109
                }, this.o                                                                                              // 110
            );                                                                                                         // 111
                                                                                                                       // 112
            // routing value                                                                                           // 113
            if(this.$.is('fieldset')) {                                                                                // 114
                                                                                                                       // 115
                // fieldset = array of integer                                                                         // 116
                this.v = {};                                                                                           // 117
                this.i = this.$.find('input')                                                                          // 118
                this.i.each(function(k) {                                                                              // 119
                    var $this = $(this);                                                                               // 120
                    s.i[k] = $this;                                                                                    // 121
                    s.v[k] = $this.val();                                                                              // 122
                                                                                                                       // 123
                    $this.bind(                                                                                        // 124
                        'change'                                                                                       // 125
                        , function () {                                                                                // 126
                            var val = {};                                                                              // 127
                            val[k] = $this.val();                                                                      // 128
                            s.val(val);                                                                                // 129
                        }                                                                                              // 130
                    );                                                                                                 // 131
                });                                                                                                    // 132
                this.$.find('legend').remove();                                                                        // 133
                                                                                                                       // 134
            } else {                                                                                                   // 135
                // input = integer                                                                                     // 136
                this.i = this.$;                                                                                       // 137
                this.v = this.$.val();                                                                                 // 138
                (this.v == '') && (this.v = this.o.min);                                                               // 139
                                                                                                                       // 140
                this.$.bind(                                                                                           // 141
                    'change'                                                                                           // 142
                    , function () {                                                                                    // 143
                        s.val(s._validate(s.$.val()));                                                                 // 144
                    }                                                                                                  // 145
                );                                                                                                     // 146
            }                                                                                                          // 147
                                                                                                                       // 148
            (!this.o.displayInput) && this.$.hide();                                                                   // 149
                                                                                                                       // 150
            this.$c = $('<canvas width="' +                                                                            // 151
                            this.o.width + 'px" height="' +                                                            // 152
                            this.o.height + 'px"></canvas>');                                                          // 153
            this.c = this.$c[0].getContext("2d");                                                                      // 154
                                                                                                                       // 155
            this.$                                                                                                     // 156
                .wrap($('<div style="' + (this.o.inline ? 'display:inline;' : '') +                                    // 157
                        'width:' + this.o.width + 'px;height:' +                                                       // 158
                        this.o.height + 'px;"></div>'))                                                                // 159
                .before(this.$c);                                                                                      // 160
                                                                                                                       // 161
            if (this.v instanceof Object) {                                                                            // 162
                this.cv = {};                                                                                          // 163
                this.copy(this.v, this.cv);                                                                            // 164
            } else {                                                                                                   // 165
                this.cv = this.v;                                                                                      // 166
            }                                                                                                          // 167
                                                                                                                       // 168
            this.$                                                                                                     // 169
                .bind("configure", cf)                                                                                 // 170
                .parent()                                                                                              // 171
                .bind("configure", cf);                                                                                // 172
                                                                                                                       // 173
            this._listen()                                                                                             // 174
                ._configure()                                                                                          // 175
                ._xy()                                                                                                 // 176
                .init();                                                                                               // 177
                                                                                                                       // 178
            this.isInit = true;                                                                                        // 179
                                                                                                                       // 180
            this._draw();                                                                                              // 181
                                                                                                                       // 182
            return this;                                                                                               // 183
        };                                                                                                             // 184
                                                                                                                       // 185
        this._draw = function () {                                                                                     // 186
                                                                                                                       // 187
            // canvas pre-rendering                                                                                    // 188
            var d = true,                                                                                              // 189
                c = document.createElement('canvas');                                                                  // 190
                                                                                                                       // 191
            c.width = s.o.width;                                                                                       // 192
            c.height = s.o.height;                                                                                     // 193
            s.g = c.getContext('2d');                                                                                  // 194
                                                                                                                       // 195
            s.clear();                                                                                                 // 196
                                                                                                                       // 197
            s.dH                                                                                                       // 198
            && (d = s.dH());                                                                                           // 199
                                                                                                                       // 200
            (d !== false) && s.draw();                                                                                 // 201
                                                                                                                       // 202
            s.c.drawImage(c, 0, 0);                                                                                    // 203
            c = null;                                                                                                  // 204
        };                                                                                                             // 205
                                                                                                                       // 206
        this._touch = function (e) {                                                                                   // 207
                                                                                                                       // 208
            var touchMove = function (e) {                                                                             // 209
                                                                                                                       // 210
                var v = s.xy2val(                                                                                      // 211
                            e.originalEvent.touches[s.t].pageX,                                                        // 212
                            e.originalEvent.touches[s.t].pageY                                                         // 213
                            );                                                                                         // 214
                                                                                                                       // 215
                if (v == s.cv) return;                                                                                 // 216
                                                                                                                       // 217
                if (                                                                                                   // 218
                    s.cH                                                                                               // 219
                    && (s.cH(v) === false)                                                                             // 220
                ) return;                                                                                              // 221
                                                                                                                       // 222
                                                                                                                       // 223
                s.change(s._validate(v));                                                                              // 224
                s._draw();                                                                                             // 225
            };                                                                                                         // 226
                                                                                                                       // 227
            // get touches index                                                                                       // 228
            this.t = k.c.t(e);                                                                                         // 229
                                                                                                                       // 230
            // First touch                                                                                             // 231
            touchMove(e);                                                                                              // 232
                                                                                                                       // 233
            // Touch events listeners                                                                                  // 234
            k.c.d                                                                                                      // 235
                .bind("touchmove.k", touchMove)                                                                        // 236
                .bind(                                                                                                 // 237
                    "touchend.k"                                                                                       // 238
                    , function () {                                                                                    // 239
                        k.c.d.unbind('touchmove.k touchend.k');                                                        // 240
                                                                                                                       // 241
                        if (                                                                                           // 242
                            s.rH                                                                                       // 243
                            && (s.rH(s.cv) === false)                                                                  // 244
                        ) return;                                                                                      // 245
                                                                                                                       // 246
                        s.val(s.cv);                                                                                   // 247
                    }                                                                                                  // 248
                );                                                                                                     // 249
                                                                                                                       // 250
            return this;                                                                                               // 251
        };                                                                                                             // 252
                                                                                                                       // 253
        this._mouse = function (e) {                                                                                   // 254
                                                                                                                       // 255
            var mouseMove = function (e) {                                                                             // 256
                var v = s.xy2val(e.pageX, e.pageY);                                                                    // 257
                if (v == s.cv) return;                                                                                 // 258
                                                                                                                       // 259
                if (                                                                                                   // 260
                    s.cH                                                                                               // 261
                    && (s.cH(v) === false)                                                                             // 262
                ) return;                                                                                              // 263
                                                                                                                       // 264
                s.change(s._validate(v));                                                                              // 265
                s._draw();                                                                                             // 266
            };                                                                                                         // 267
                                                                                                                       // 268
            // First click                                                                                             // 269
            mouseMove(e);                                                                                              // 270
                                                                                                                       // 271
            // Mouse events listeners                                                                                  // 272
            k.c.d                                                                                                      // 273
                .bind("mousemove.k", mouseMove)                                                                        // 274
                .bind(                                                                                                 // 275
                    // Escape key cancel current change                                                                // 276
                    "keyup.k"                                                                                          // 277
                    , function (e) {                                                                                   // 278
                        if (e.keyCode === 27) {                                                                        // 279
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");                                             // 280
                                                                                                                       // 281
                            if (                                                                                       // 282
                                s.eH                                                                                   // 283
                                && (s.eH() === false)                                                                  // 284
                            ) return;                                                                                  // 285
                                                                                                                       // 286
                            s.cancel();                                                                                // 287
                        }                                                                                              // 288
                    }                                                                                                  // 289
                )                                                                                                      // 290
                .bind(                                                                                                 // 291
                    "mouseup.k"                                                                                        // 292
                    , function (e) {                                                                                   // 293
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');                                                 // 294
                                                                                                                       // 295
                        if (                                                                                           // 296
                            s.rH                                                                                       // 297
                            && (s.rH(s.cv) === false)                                                                  // 298
                        ) return;                                                                                      // 299
                                                                                                                       // 300
                        s.val(s.cv);                                                                                   // 301
                    }                                                                                                  // 302
                );                                                                                                     // 303
                                                                                                                       // 304
            return this;                                                                                               // 305
        };                                                                                                             // 306
                                                                                                                       // 307
        this._xy = function () {                                                                                       // 308
            var o = this.$c.offset();                                                                                  // 309
            this.x = o.left;                                                                                           // 310
            this.y = o.top;                                                                                            // 311
            return this;                                                                                               // 312
        };                                                                                                             // 313
                                                                                                                       // 314
        this._listen = function () {                                                                                   // 315
                                                                                                                       // 316
            if (!this.o.readOnly) {                                                                                    // 317
                this.$c                                                                                                // 318
                    .bind(                                                                                             // 319
                        "mousedown"                                                                                    // 320
                        , function (e) {                                                                               // 321
                            e.preventDefault();                                                                        // 322
                            s._xy()._mouse(e);                                                                         // 323
                         }                                                                                             // 324
                    )                                                                                                  // 325
                    .bind(                                                                                             // 326
                        "touchstart"                                                                                   // 327
                        , function (e) {                                                                               // 328
                            e.preventDefault();                                                                        // 329
                            s._xy()._touch(e);                                                                         // 330
                         }                                                                                             // 331
                    );                                                                                                 // 332
                this.listen();                                                                                         // 333
            } else {                                                                                                   // 334
                this.$.attr('readonly', 'readonly');                                                                   // 335
            }                                                                                                          // 336
                                                                                                                       // 337
            return this;                                                                                               // 338
        };                                                                                                             // 339
                                                                                                                       // 340
        this._configure = function () {                                                                                // 341
                                                                                                                       // 342
            // Hooks                                                                                                   // 343
            if (this.o.draw) this.dH = this.o.draw;                                                                    // 344
            if (this.o.change) this.cH = this.o.change;                                                                // 345
            if (this.o.cancel) this.eH = this.o.cancel;                                                                // 346
            if (this.o.release) this.rH = this.o.release;                                                              // 347
                                                                                                                       // 348
            if (this.o.displayPrevious) {                                                                              // 349
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");                                                      // 350
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");                                                     // 351
            } else {                                                                                                   // 352
                this.fgColor = this.o.fgColor;                                                                         // 353
            }                                                                                                          // 354
                                                                                                                       // 355
            return this;                                                                                               // 356
        };                                                                                                             // 357
                                                                                                                       // 358
        this._clear = function () {                                                                                    // 359
            this.$c[0].width = this.$c[0].width;                                                                       // 360
        };                                                                                                             // 361
                                                                                                                       // 362
        this._validate = function(v) {                                                                                 // 363
            return (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;                                      // 364
        };                                                                                                             // 365
                                                                                                                       // 366
        // Abstract methods                                                                                            // 367
        this.listen = function () {}; // on start, one time                                                            // 368
        this.extend = function () {}; // each time configure triggered                                                 // 369
        this.init = function () {}; // each time configure triggered                                                   // 370
        this.change = function (v) {}; // on change                                                                    // 371
        this.val = function (v) {}; // on release                                                                      // 372
        this.xy2val = function (x, y) {}; //                                                                           // 373
        this.draw = function () {}; // on change / on release                                                          // 374
        this.clear = function () { this._clear(); };                                                                   // 375
                                                                                                                       // 376
        // Utils                                                                                                       // 377
        this.h2rgba = function (h, a) {                                                                                // 378
            var rgb;                                                                                                   // 379
            h = h.substring(1,7)                                                                                       // 380
            rgb = [parseInt(h.substring(0,2),16)                                                                       // 381
                   ,parseInt(h.substring(2,4),16)                                                                      // 382
                   ,parseInt(h.substring(4,6),16)];                                                                    // 383
            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";                                     // 384
        };                                                                                                             // 385
                                                                                                                       // 386
        this.copy = function (f, t) {                                                                                  // 387
            for (var i in f) { t[i] = f[i]; }                                                                          // 388
        };                                                                                                             // 389
    };                                                                                                                 // 390
                                                                                                                       // 391
                                                                                                                       // 392
    /**                                                                                                                // 393
     * k.Dial                                                                                                          // 394
     */                                                                                                                // 395
    k.Dial = function () {                                                                                             // 396
        k.o.call(this);                                                                                                // 397
                                                                                                                       // 398
        this.startAngle = null;                                                                                        // 399
        this.xy = null;                                                                                                // 400
        this.radius = null;                                                                                            // 401
        this.lineWidth = null;                                                                                         // 402
        this.cursorExt = null;                                                                                         // 403
        this.w2 = null;                                                                                                // 404
        this.PI2 = 2*Math.PI;                                                                                          // 405
                                                                                                                       // 406
        this.extend = function () {                                                                                    // 407
            this.o = $.extend(                                                                                         // 408
                {                                                                                                      // 409
                    bgColor : this.$.data('bgcolor') || '#EEEEEE',                                                     // 410
                    angleOffset : this.$.data('angleoffset') || 0,                                                     // 411
                    angleArc : this.$.data('anglearc') || 360,                                                         // 412
                    inline : true                                                                                      // 413
                }, this.o                                                                                              // 414
            );                                                                                                         // 415
        };                                                                                                             // 416
                                                                                                                       // 417
        this.val = function (v) {                                                                                      // 418
            if (null != v) {                                                                                           // 419
                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;                                    // 420
                this.v = this.cv;                                                                                      // 421
                this.$.val(this.v);                                                                                    // 422
                this._draw();                                                                                          // 423
            } else {                                                                                                   // 424
                return this.v;                                                                                         // 425
            }                                                                                                          // 426
        };                                                                                                             // 427
                                                                                                                       // 428
        this.xy2val = function (x, y) {                                                                                // 429
            var a, ret;                                                                                                // 430
                                                                                                                       // 431
            a = Math.atan2(                                                                                            // 432
                        x - (this.x + this.w2)                                                                         // 433
                        , - (y - this.y - this.w2)                                                                     // 434
                    ) - this.angleOffset;                                                                              // 435
                                                                                                                       // 436
            if(this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {                                                   // 437
                // if isset angleArc option, set to min if .5 under min                                                // 438
                a = 0;                                                                                                 // 439
            } else if (a < 0) {                                                                                        // 440
                a += this.PI2;                                                                                         // 441
            }                                                                                                          // 442
                                                                                                                       // 443
            ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc))                                           // 444
                    + this.o.min;                                                                                      // 445
                                                                                                                       // 446
            this.o.stopper                                                                                             // 447
            && (ret = max(min(ret, this.o.max), this.o.min));                                                          // 448
                                                                                                                       // 449
            return ret;                                                                                                // 450
        };                                                                                                             // 451
                                                                                                                       // 452
        this.listen = function () {                                                                                    // 453
            // bind MouseWheel                                                                                         // 454
            var s = this,                                                                                              // 455
                mw = function (e) {                                                                                    // 456
                            e.preventDefault();                                                                        // 457
                            var ori = e.originalEvent                                                                  // 458
                                ,deltaX = ori.detail || ori.wheelDeltaX                                                // 459
                                ,deltaY = ori.detail || ori.wheelDeltaY                                                // 460
                                ,v = parseInt(s.$.val()) + (deltaX>0 || deltaY>0 ? s.o.step : deltaX<0 || deltaY<0 ? -s.o.step : 0);
                                                                                                                       // 462
                            if (                                                                                       // 463
                                s.cH                                                                                   // 464
                                && (s.cH(v) === false)                                                                 // 465
                            ) return;                                                                                  // 466
                                                                                                                       // 467
                            s.val(v);                                                                                  // 468
                        }                                                                                              // 469
                , kval, to, m = 1, kv = {37:-s.o.step, 38:s.o.step, 39:s.o.step, 40:-s.o.step};                        // 470
                                                                                                                       // 471
            this.$                                                                                                     // 472
                .bind(                                                                                                 // 473
                    "keydown"                                                                                          // 474
                    ,function (e) {                                                                                    // 475
                        var kc = e.keyCode;                                                                            // 476
                                                                                                                       // 477
                        // numpad support                                                                              // 478
                        if(kc >= 96 && kc <= 105) {                                                                    // 479
                            kc = e.keyCode = kc - 48;                                                                  // 480
                        }                                                                                              // 481
                                                                                                                       // 482
                        kval = parseInt(String.fromCharCode(kc));                                                      // 483
                                                                                                                       // 484
                        if (isNaN(kval)) {                                                                             // 485
                                                                                                                       // 486
                            (kc !== 13)         // enter                                                               // 487
                            && (kc !== 8)       // bs                                                                  // 488
                            && (kc !== 9)       // tab                                                                 // 489
                            && (kc !== 189)     // -                                                                   // 490
                            && e.preventDefault();                                                                     // 491
                                                                                                                       // 492
                            // arrows                                                                                  // 493
                            if ($.inArray(kc,[37,38,39,40]) > -1) {                                                    // 494
                                e.preventDefault();                                                                    // 495
                                                                                                                       // 496
                                var v = parseInt(s.$.val()) + kv[kc] * m;                                              // 497
                                                                                                                       // 498
                                s.o.stopper                                                                            // 499
                                && (v = max(min(v, s.o.max), s.o.min));                                                // 500
                                                                                                                       // 501
                                s.change(v);                                                                           // 502
                                s._draw();                                                                             // 503
                                                                                                                       // 504
                                // long time keydown speed-up                                                          // 505
                                to = window.setTimeout(                                                                // 506
                                    function () { m*=2; }                                                              // 507
                                    ,30                                                                                // 508
                                );                                                                                     // 509
                            }                                                                                          // 510
                        }                                                                                              // 511
                    }                                                                                                  // 512
                )                                                                                                      // 513
                .bind(                                                                                                 // 514
                    "keyup"                                                                                            // 515
                    ,function (e) {                                                                                    // 516
                        if (isNaN(kval)) {                                                                             // 517
                            if (to) {                                                                                  // 518
                                window.clearTimeout(to);                                                               // 519
                                to = null;                                                                             // 520
                                m = 1;                                                                                 // 521
                                s.val(s.$.val());                                                                      // 522
                            }                                                                                          // 523
                        } else {                                                                                       // 524
                            // kval postcond                                                                           // 525
                            (s.$.val() > s.o.max && s.$.val(s.o.max))                                                  // 526
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));                                              // 527
                        }                                                                                              // 528
                                                                                                                       // 529
                    }                                                                                                  // 530
                );                                                                                                     // 531
                                                                                                                       // 532
            this.$c.bind("mousewheel DOMMouseScroll", mw);                                                             // 533
            this.$.bind("mousewheel DOMMouseScroll", mw)                                                               // 534
        };                                                                                                             // 535
                                                                                                                       // 536
        this.init = function () {                                                                                      // 537
                                                                                                                       // 538
            if (                                                                                                       // 539
                this.v < this.o.min                                                                                    // 540
                || this.v > this.o.max                                                                                 // 541
            ) this.v = this.o.min;                                                                                     // 542
                                                                                                                       // 543
            this.$.val(this.v);                                                                                        // 544
            this.w2 = this.o.width / 2;                                                                                // 545
            this.cursorExt = this.o.cursor / 100;                                                                      // 546
            this.xy = this.w2;                                                                                         // 547
            this.lineWidth = this.xy * this.o.thickness;                                                               // 548
            this.lineCap = this.o.lineCap;                                                                             // 549
            this.radius = this.xy - this.lineWidth / 2;                                                                // 550
                                                                                                                       // 551
            this.o.angleOffset                                                                                         // 552
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);                              // 553
                                                                                                                       // 554
            this.o.angleArc                                                                                            // 555
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);                                // 556
                                                                                                                       // 557
            // deg to rad                                                                                              // 558
            this.angleOffset = this.o.angleOffset * Math.PI / 180;                                                     // 559
            this.angleArc = this.o.angleArc * Math.PI / 180;                                                           // 560
                                                                                                                       // 561
            // compute start and end angles                                                                            // 562
            this.startAngle = 1.5 * Math.PI + this.angleOffset;                                                        // 563
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;                                          // 564
                                                                                                                       // 565
            var s = max(                                                                                               // 566
                            String(Math.abs(this.o.max)).length                                                        // 567
                            , String(Math.abs(this.o.min)).length                                                      // 568
                            , 2                                                                                        // 569
                            ) + 2;                                                                                     // 570
                                                                                                                       // 571
            this.o.displayInput                                                                                        // 572
                && this.i.css({                                                                                        // 573
                        'width' : ((this.o.width / 2 + 4) >> 0) + 'px'                                                 // 574
                        ,'height' : ((this.o.width / 3) >> 0) + 'px'                                                   // 575
                        ,'position' : 'absolute'                                                                       // 576
                        ,'vertical-align' : 'middle'                                                                   // 577
                        ,'margin-top' : ((this.o.width / 3) >> 0) + 'px'                                               // 578
                        ,'margin-left' : '-' + ((this.o.width * 3 / 4 + 2) >> 0) + 'px'                                // 579
                        ,'border' : 0                                                                                  // 580
                        ,'background' : 'none'                                                                         // 581
                        ,'font' : 'bold ' + ((this.o.width / s) >> 0) + 'px Arial'                                     // 582
                        ,'text-align' : 'center'                                                                       // 583
                        ,'color' : this.o.inputColor || this.o.fgColor                                                 // 584
                        ,'padding' : '0px'                                                                             // 585
                        ,'-webkit-appearance': 'none'                                                                  // 586
                        })                                                                                             // 587
                || this.i.css({                                                                                        // 588
                        'width' : '0px'                                                                                // 589
                        ,'visibility' : 'hidden'                                                                       // 590
                        });                                                                                            // 591
        };                                                                                                             // 592
                                                                                                                       // 593
        this.change = function (v) {                                                                                   // 594
            this.cv = v;                                                                                               // 595
            this.$.val(v);                                                                                             // 596
        };                                                                                                             // 597
                                                                                                                       // 598
        this.angle = function (v) {                                                                                    // 599
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);                                       // 600
        };                                                                                                             // 601
                                                                                                                       // 602
        this.draw = function () {                                                                                      // 603
                                                                                                                       // 604
            var c = this.g,                 // context                                                                 // 605
                a = this.angle(this.cv)    // Angle                                                                    // 606
                , sat = this.startAngle     // Start angle                                                             // 607
                , eat = sat + a             // End angle                                                               // 608
                , sa, ea                    // Previous angles                                                         // 609
                , r = 1;                                                                                               // 610
                                                                                                                       // 611
            c.lineWidth = this.lineWidth;                                                                              // 612
                                                                                                                       // 613
            c.lineCap = this.lineCap;                                                                                  // 614
                                                                                                                       // 615
            this.o.cursor                                                                                              // 616
                && (sat = eat - this.cursorExt)                                                                        // 617
                && (eat = eat + this.cursorExt);                                                                       // 618
                                                                                                                       // 619
            c.beginPath();                                                                                             // 620
                c.strokeStyle = this.o.bgColor;                                                                        // 621
                c.arc(this.xy, this.xy, this.radius, this.endAngle, this.startAngle, true);                            // 622
            c.stroke();                                                                                                // 623
                                                                                                                       // 624
            if (this.o.displayPrevious) {                                                                              // 625
                ea = this.startAngle + this.angle(this.v);                                                             // 626
                sa = this.startAngle;                                                                                  // 627
                this.o.cursor                                                                                          // 628
                    && (sa = ea - this.cursorExt)                                                                      // 629
                    && (ea = ea + this.cursorExt);                                                                     // 630
                                                                                                                       // 631
                c.beginPath();                                                                                         // 632
                    c.strokeStyle = this.pColor;                                                                       // 633
                    c.arc(this.xy, this.xy, this.radius, sa, ea, false);                                               // 634
                c.stroke();                                                                                            // 635
                r = (this.cv == this.v);                                                                               // 636
            }                                                                                                          // 637
                                                                                                                       // 638
            c.beginPath();                                                                                             // 639
                c.strokeStyle = r ? this.o.fgColor : this.fgColor ;                                                    // 640
                c.arc(this.xy, this.xy, this.radius, sat, eat, false);                                                 // 641
            c.stroke();                                                                                                // 642
        };                                                                                                             // 643
                                                                                                                       // 644
        this.cancel = function () {                                                                                    // 645
            this.val(this.v);                                                                                          // 646
        };                                                                                                             // 647
    };                                                                                                                 // 648
                                                                                                                       // 649
    $.fn.dial = $.fn.knob = function (o) {                                                                             // 650
        return this.each(                                                                                              // 651
            function () {                                                                                              // 652
                var d = new k.Dial();                                                                                  // 653
                d.o = o;                                                                                               // 654
                d.$ = $(this);                                                                                         // 655
                d.run();                                                                                               // 656
            }                                                                                                          // 657
        ).parent();                                                                                                    // 658
    };                                                                                                                 // 659
                                                                                                                       // 660
})(jQuery);                                                                                                            // 661
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/bootstrap-3/bootstrap-3/js/jquery.flot.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* Javascript plotting library for jQuery, version 0.8.0-beta.                                                         // 1
                                                                                                                       // 2
Copyright (c) 2007-2013 IOLA and Ole Laursen.                                                                          // 3
Licensed under the MIT license.                                                                                        // 4
                                                                                                                       // 5
*/                                                                                                                     // 6
                                                                                                                       // 7
// first an inline dependency, jquery.colorhelpers.js, we inline it here                                               // 8
// for convenience                                                                                                     // 9
                                                                                                                       // 10
/* Plugin for jQuery for working with colors.                                                                          // 11
 *                                                                                                                     // 12
 * Version 1.1.                                                                                                        // 13
 *                                                                                                                     // 14
 * Inspiration from jQuery color animation plugin by John Resig.                                                       // 15
 *                                                                                                                     // 16
 * Released under the MIT license by Ole Laursen, October 2009.                                                        // 17
 *                                                                                                                     // 18
 * Examples:                                                                                                           // 19
 *                                                                                                                     // 20
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()                                                // 21
 *   var c = $.color.extract($("#mydiv"), 'background-color');                                                         // 22
 *   console.log(c.r, c.g, c.b, c.a);                                                                                  // 23
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"                                        // 24
 *                                                                                                                     // 25
 * Note that .scale() and .add() return the same modified object                                                       // 26
 * instead of making a new one.                                                                                        // 27
 *                                                                                                                     // 28
 * V. 1.1: Fix error handling so e.g. parsing an empty string does                                                     // 29
 * produce a color rather than just crashing.                                                                          // 30
 */                                                                                                                    // 31
(function(B){B.color={};B.color.make=function(F,E,C,D){var G={};G.r=F||0;G.g=E||0;G.b=C||0;G.a=D!=null?D:1;G.add=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]+=I}return G.normalize()};G.scale=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]*=I}return G.normalize()};G.toString=function(){if(G.a>=1){return"rgb("+[G.r,G.g,G.b].join(",")+")"}else{return"rgba("+[G.r,G.g,G.b,G.a].join(",")+")"}};G.normalize=function(){function H(J,K,I){return K<J?J:(K>I?I:K)}G.r=H(0,parseInt(G.r),255);G.g=H(0,parseInt(G.g),255);G.b=H(0,parseInt(G.b),255);G.a=H(0,G.a,1);return G};G.clone=function(){return B.color.make(G.r,G.b,G.g,G.a)};return G.normalize()};B.color.extract=function(D,C){var E;do{E=D.css(C).toLowerCase();if(E!=""&&E!="transparent"){break}D=D.parent()}while(!B.nodeName(D.get(0),"body"));if(E=="rgba(0, 0, 0, 0)"){E="transparent"}return B.color.parse(E)};B.color.parse=function(F){var E,C=B.color.make;if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10))}if(E=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10),parseFloat(E[4]))}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55)}if(E=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55,parseFloat(E[4]))}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return C(parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16))}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return C(parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16))}var D=B.trim(F).toLowerCase();if(D=="transparent"){return C(255,255,255,0)}else{E=A[D]||[0,0,0];return C(E[0],E[1],E[2])}};var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);
                                                                                                                       // 33
// the actual Flot code                                                                                                // 34
(function($) {                                                                                                         // 35
                                                                                                                       // 36
	// Cache the prototype hasOwnProperty for faster access                                                               // 37
                                                                                                                       // 38
	var hasOwnProperty = Object.prototype.hasOwnProperty;                                                                 // 39
                                                                                                                       // 40
	// Add default styles for tick labels and other text                                                                  // 41
                                                                                                                       // 42
	$(function() {                                                                                                        // 43
		$("head").prepend([                                                                                                  // 44
			"<style id='flot-default-styles'>",                                                                                 // 45
			".flot-tick-label {font-size:smaller;color:#545454;}",                                                              // 46
			"</style>"                                                                                                          // 47
		].join(""));                                                                                                         // 48
	});                                                                                                                   // 49
                                                                                                                       // 50
	///////////////////////////////////////////////////////////////////////////                                           // 51
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.                                                       // 52
	//                                                                                                                    // 53
	// @constructor                                                                                                       // 54
	// @param {string} cls List of classes to apply to the canvas.                                                        // 55
	// @param {element} container Element onto which to append the canvas.                                                // 56
	//                                                                                                                    // 57
	// Requiring a container is a little iffy, but unfortunately canvas                                                   // 58
	// operations don't work unless the canvas is attached to the DOM.                                                    // 59
                                                                                                                       // 60
	function Canvas(cls, container) {                                                                                     // 61
                                                                                                                       // 62
		var element = container.children("." + cls)[0];                                                                      // 63
                                                                                                                       // 64
		if (element == null) {                                                                                               // 65
                                                                                                                       // 66
			element = document.createElement("canvas");                                                                         // 67
			element.className = cls;                                                                                            // 68
                                                                                                                       // 69
			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })                                         // 70
				.appendTo(container);                                                                                              // 71
                                                                                                                       // 72
			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas                                                   // 73
                                                                                                                       // 74
			if (!element.getContext) {                                                                                          // 75
				if (window.G_vmlCanvasManager) {                                                                                   // 76
					element = window.G_vmlCanvasManager.initElement(element);                                                         // 77
				} else {                                                                                                           // 78
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}                                                                                                                  // 80
			}                                                                                                                   // 81
		}                                                                                                                    // 82
                                                                                                                       // 83
		this.element = element;                                                                                              // 84
                                                                                                                       // 85
		var context = this.context = element.getContext("2d");                                                               // 86
                                                                                                                       // 87
		// Determine the screen's ratio of physical to device-independent                                                    // 88
		// pixels.  This is the ratio between the canvas width that the browser                                              // 89
		// advertises and the number of pixels actually present in that space.                                               // 90
                                                                                                                       // 91
		// The iPhone 4, for example, has a device-independent width of 320px,                                               // 92
		// but its screen is actually 640px wide.  It therefore has a pixel                                                  // 93
		// ratio of 2, while most normal devices have a ratio of 1.                                                          // 94
                                                                                                                       // 95
		var devicePixelRatio = window.devicePixelRatio || 1,                                                                 // 96
			backingStoreRatio =                                                                                                 // 97
				context.webkitBackingStorePixelRatio ||                                                                            // 98
				context.mozBackingStorePixelRatio ||                                                                               // 99
				context.msBackingStorePixelRatio ||                                                                                // 100
				context.oBackingStorePixelRatio ||                                                                                 // 101
				context.backingStorePixelRatio || 1;                                                                               // 102
                                                                                                                       // 103
		this.pixelRatio = devicePixelRatio / backingStoreRatio;                                                              // 104
                                                                                                                       // 105
		// Size the canvas to match the internal dimensions of its container                                                 // 106
                                                                                                                       // 107
		this.resize(container.width(), container.height());                                                                  // 108
                                                                                                                       // 109
		// Collection of HTML div layers for text overlaid onto the canvas                                                   // 110
                                                                                                                       // 111
		this.text = {};                                                                                                      // 112
                                                                                                                       // 113
		// Cache of text fragments and metrics, so we can avoid expensively                                                  // 114
		// re-calculating them when the plot is re-rendered in a loop.                                                       // 115
                                                                                                                       // 116
		this._textCache = {};                                                                                                // 117
	}                                                                                                                     // 118
                                                                                                                       // 119
	// Resizes the canvas to the given dimensions.                                                                        // 120
	//                                                                                                                    // 121
	// @param {number} width New width of the canvas, in pixels.                                                          // 122
	// @param {number} width New height of the canvas, in pixels.                                                         // 123
                                                                                                                       // 124
	Canvas.prototype.resize = function(width, height) {                                                                   // 125
                                                                                                                       // 126
		if (width <= 0 || height <= 0) {                                                                                     // 127
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);                          // 128
		}                                                                                                                    // 129
                                                                                                                       // 130
		var element = this.element,                                                                                          // 131
			context = this.context,                                                                                             // 132
			pixelRatio = this.pixelRatio;                                                                                       // 133
                                                                                                                       // 134
		// Resize the canvas, increasing its density based on the display's                                                  // 135
		// pixel ratio; basically giving it more pixels without increasing the                                               // 136
		// size of its element, to take advantage of the fact that retina                                                    // 137
		// displays have that many more pixels in the same advertised space.                                                 // 138
                                                                                                                       // 139
		// Resizing should reset the state (excanvas seems to be buggy though)                                               // 140
                                                                                                                       // 141
		if (this.width != width) {                                                                                           // 142
			element.width = width * pixelRatio;                                                                                 // 143
			element.style.width = width + "px";                                                                                 // 144
			this.width = width;                                                                                                 // 145
		}                                                                                                                    // 146
                                                                                                                       // 147
		if (this.height != height) {                                                                                         // 148
			element.height = height * pixelRatio;                                                                               // 149
			element.style.height = height + "px";                                                                               // 150
			this.height = height;                                                                                               // 151
		}                                                                                                                    // 152
                                                                                                                       // 153
		// Save the context, so we can reset in case we get replotted.  The                                                  // 154
		// restore ensure that we're really back at the initial state, and                                                   // 155
		// should be safe even if we haven't saved the initial state yet.                                                    // 156
                                                                                                                       // 157
		context.restore();                                                                                                   // 158
		context.save();                                                                                                      // 159
                                                                                                                       // 160
		// Scale the coordinate space to match the display density; so even though we                                        // 161
		// may have twice as many pixels, we still want lines and other drawing to                                           // 162
		// appear at the same size; the extra pixels will just make them crisper.                                            // 163
                                                                                                                       // 164
		context.scale(pixelRatio, pixelRatio);                                                                               // 165
	};                                                                                                                    // 166
                                                                                                                       // 167
	// Clears the entire canvas area, not including any overlaid HTML text                                                // 168
                                                                                                                       // 169
	Canvas.prototype.clear = function() {                                                                                 // 170
		this.context.clearRect(0, 0, this.width, this.height);                                                               // 171
	};                                                                                                                    // 172
                                                                                                                       // 173
	// Finishes rendering the canvas, including managing the text overlay.                                                // 174
                                                                                                                       // 175
	Canvas.prototype.render = function() {                                                                                // 176
                                                                                                                       // 177
		var cache = this._textCache;                                                                                         // 178
                                                                                                                       // 179
		// For each text layer, add elements marked as active that haven't                                                   // 180
		// already been rendered, and remove those that are no longer active.                                                // 181
                                                                                                                       // 182
		for (var layerKey in cache) {                                                                                        // 183
			if (hasOwnProperty.call(cache, layerKey)) {                                                                         // 184
                                                                                                                       // 185
				var layer = this.getTextLayer(layerKey),                                                                           // 186
					layerCache = cache[layerKey];                                                                                     // 187
                                                                                                                       // 188
				layer.hide();                                                                                                      // 189
                                                                                                                       // 190
				for (var styleKey in layerCache) {                                                                                 // 191
					if (hasOwnProperty.call(layerCache, styleKey)) {                                                                  // 192
						var styleCache = layerCache[styleKey];                                                                           // 193
						for (var key in styleCache) {                                                                                    // 194
							if (hasOwnProperty.call(styleCache, key)) {                                                                     // 195
								var info = styleCache[key];                                                                                    // 196
								if (info.active) {                                                                                             // 197
									if (!info.rendered) {                                                                                         // 198
										layer.append(info.element);                                                                                  // 199
										info.rendered = true;                                                                                        // 200
									}                                                                                                             // 201
								} else {                                                                                                       // 202
									delete styleCache[key];                                                                                       // 203
									if (info.rendered) {                                                                                          // 204
										info.element.detach();                                                                                       // 205
									}                                                                                                             // 206
								}                                                                                                              // 207
							}                                                                                                               // 208
						}                                                                                                                // 209
					}                                                                                                                 // 210
				}                                                                                                                  // 211
                                                                                                                       // 212
				layer.show();                                                                                                      // 213
			}                                                                                                                   // 214
		}                                                                                                                    // 215
	};                                                                                                                    // 216
                                                                                                                       // 217
	// Creates (if necessary) and returns the text overlay container.                                                     // 218
	//                                                                                                                    // 219
	// @param {string} classes String of space-separated CSS classes used to                                              // 220
	//     uniquely identify the text layer.                                                                              // 221
	// @return {object} The jQuery-wrapped text-layer div.                                                                // 222
                                                                                                                       // 223
	Canvas.prototype.getTextLayer = function(classes) {                                                                   // 224
                                                                                                                       // 225
		var layer = this.text[classes];                                                                                      // 226
                                                                                                                       // 227
		// Create the text layer if it doesn't exist                                                                         // 228
                                                                                                                       // 229
		if (layer == null) {                                                                                                 // 230
			layer = this.text[classes] = $("<div></div>")                                                                       // 231
				.addClass("flot-text " + classes)                                                                                  // 232
				.css({                                                                                                             // 233
					position: "absolute",                                                                                             // 234
					top: 0,                                                                                                           // 235
					left: 0,                                                                                                          // 236
					bottom: 0,                                                                                                        // 237
					right: 0                                                                                                          // 238
				})                                                                                                                 // 239
				.insertAfter(this.element);                                                                                        // 240
		}                                                                                                                    // 241
                                                                                                                       // 242
		return layer;                                                                                                        // 243
	};                                                                                                                    // 244
                                                                                                                       // 245
	// Creates (if necessary) and returns a text info object.                                                             // 246
	//                                                                                                                    // 247
	// The object looks like this:                                                                                        // 248
	//                                                                                                                    // 249
	// {                                                                                                                  // 250
	//     width: Width of the text's wrapper div.                                                                        // 251
	//     height: Height of the text's wrapper div.                                                                      // 252
	//     active: Flag indicating whether the text should be visible.                                                    // 253
	//     rendered: Flag indicating whether the text is currently visible.                                               // 254
	//     element: The jQuery-wrapped HTML div containing the text.                                                      // 255
	// }                                                                                                                  // 256
	//                                                                                                                    // 257
	// Canvas maintains a cache of recently-used text info objects; getTextInfo                                           // 258
	// either returns the cached element or creates a new entry.                                                          // 259
	//                                                                                                                    // 260
	// @param {string} layer A string of space-separated CSS classes uniquely                                             // 261
	//     identifying the layer containing this text.                                                                    // 262
	// @param {string} text Text string to retrieve info for.                                                             // 263
	// @param {(string|object)=} font Either a string of space-separated CSS                                              // 264
	//     classes or a font-spec object, defining the text's font and style.                                             // 265
	// @param {number=} angle Angle at which to rotate the text, in degrees.                                              // 266
	//     Angle is currently unused, it will be implemented in the future.                                               // 267
	// @return {object} a text info object.                                                                               // 268
                                                                                                                       // 269
	Canvas.prototype.getTextInfo = function(layer, text, font, angle) {                                                   // 270
                                                                                                                       // 271
		var textStyle, layerCache, styleCache, info;                                                                         // 272
                                                                                                                       // 273
		// Cast the value to a string, in case we were given a number or such                                                // 274
                                                                                                                       // 275
		text = "" + text;                                                                                                    // 276
                                                                                                                       // 277
		// If the font is a font-spec object, generate a CSS font definition                                                 // 278
                                                                                                                       // 279
		if (typeof font === "object") {                                                                                      // 280
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px " + font.family;            // 281
		} else {                                                                                                             // 282
			textStyle = font;                                                                                                   // 283
		}                                                                                                                    // 284
                                                                                                                       // 285
		// Retrieve (or create) the cache for the text's layer and styles                                                    // 286
                                                                                                                       // 287
		layerCache = this._textCache[layer];                                                                                 // 288
                                                                                                                       // 289
		if (layerCache == null) {                                                                                            // 290
			layerCache = this._textCache[layer] = {};                                                                           // 291
		}                                                                                                                    // 292
                                                                                                                       // 293
		styleCache = layerCache[textStyle];                                                                                  // 294
                                                                                                                       // 295
		if (styleCache == null) {                                                                                            // 296
			styleCache = layerCache[textStyle] = {};                                                                            // 297
		}                                                                                                                    // 298
                                                                                                                       // 299
		info = styleCache[text];                                                                                             // 300
                                                                                                                       // 301
		// If we can't find a matching element in our cache, create a new one                                                // 302
                                                                                                                       // 303
		if (info == null) {                                                                                                  // 304
                                                                                                                       // 305
			var element = $("<div></div>").html(text)                                                                           // 306
				.css({                                                                                                             // 307
					position: "absolute",                                                                                             // 308
					top: -9999                                                                                                        // 309
				})                                                                                                                 // 310
				.appendTo(this.getTextLayer(layer));                                                                               // 311
                                                                                                                       // 312
			if (typeof font === "object") {                                                                                     // 313
				element.css({                                                                                                      // 314
					font: textStyle,                                                                                                  // 315
					color: font.color                                                                                                 // 316
				});                                                                                                                // 317
			} else if (typeof font === "string") {                                                                              // 318
				element.addClass(font);                                                                                            // 319
			}                                                                                                                   // 320
                                                                                                                       // 321
			info = styleCache[text] = {                                                                                         // 322
				active: false,                                                                                                     // 323
				rendered: false,                                                                                                   // 324
				element: element,                                                                                                  // 325
				width: element.outerWidth(true),                                                                                   // 326
				height: element.outerHeight(true)                                                                                  // 327
			};                                                                                                                  // 328
                                                                                                                       // 329
			element.detach();                                                                                                   // 330
		}                                                                                                                    // 331
                                                                                                                       // 332
		return info;                                                                                                         // 333
	};                                                                                                                    // 334
                                                                                                                       // 335
	// Adds a text string to the canvas text overlay.                                                                     // 336
	//                                                                                                                    // 337
	// The text isn't drawn immediately; it is marked as rendering, which will                                            // 338
	// result in its addition to the canvas on the next render pass.                                                      // 339
	//                                                                                                                    // 340
	// @param {string} layer A string of space-separated CSS classes uniquely                                             // 341
	//     identifying the layer containing this text.                                                                    // 342
	// @param {number} x X coordinate at which to draw the text.                                                          // 343
	// @param {number} y Y coordinate at which to draw the text.                                                          // 344
	// @param {string} text Text string to draw.                                                                          // 345
	// @param {(string|object)=} font Either a string of space-separated CSS                                              // 346
	//     classes or a font-spec object, defining the text's font and style.                                             // 347
	// @param {number=} angle Angle at which to rotate the text, in degrees.                                              // 348
	//     Angle is currently unused, it will be implemented in the future.                                               // 349
	// @param {string=} halign Horizontal alignment of the text; either "left",                                           // 350
	//     "center" or "right".                                                                                           // 351
	// @param {string=} valign Vertical alignment of the text; either "top",                                              // 352
	//     "middle" or "bottom".                                                                                          // 353
                                                                                                                       // 354
	Canvas.prototype.addText = function(layer, x, y, text, font, angle, halign, valign) {                                 // 355
                                                                                                                       // 356
		var info = this.getTextInfo(layer, text, font, angle);                                                               // 357
                                                                                                                       // 358
		// Mark the div for inclusion in the next render pass                                                                // 359
                                                                                                                       // 360
		info.active = true;                                                                                                  // 361
                                                                                                                       // 362
		// Tweak the div's position to match the text's alignment                                                            // 363
                                                                                                                       // 364
		if (halign == "center") {                                                                                            // 365
			x -= info.width / 2;                                                                                                // 366
		} else if (halign == "right") {                                                                                      // 367
			x -= info.width;                                                                                                    // 368
		}                                                                                                                    // 369
                                                                                                                       // 370
		if (valign == "middle") {                                                                                            // 371
			y -= info.height / 2;                                                                                               // 372
		} else if (valign == "bottom") {                                                                                     // 373
			y -= info.height;                                                                                                   // 374
		}                                                                                                                    // 375
                                                                                                                       // 376
		// Move the element to its final position within the container                                                       // 377
                                                                                                                       // 378
		info.element.css({                                                                                                   // 379
			top: parseInt(y, 10),                                                                                               // 380
			left: parseInt(x, 10)                                                                                               // 381
		});                                                                                                                  // 382
	};                                                                                                                    // 383
                                                                                                                       // 384
	// Removes one or more text strings from the canvas text overlay.                                                     // 385
	//                                                                                                                    // 386
	// If no parameters are given, all text within the layer is removed.                                                  // 387
	// The text is not actually removed; it is simply marked as inactive, which                                           // 388
	// will result in its removal on the next render pass.                                                                // 389
	//                                                                                                                    // 390
	// @param {string} layer A string of space-separated CSS classes uniquely                                             // 391
	//     identifying the layer containing this text.                                                                    // 392
	// @param {string} text Text string to remove.                                                                        // 393
	// @param {(string|object)=} font Either a string of space-separated CSS                                              // 394
	//     classes or a font-spec object, defining the text's font and style.                                             // 395
	// @param {number=} angle Angle at which the text is rotated, in degrees.                                             // 396
	//     Angle is currently unused, it will be implemented in the future.                                               // 397
                                                                                                                       // 398
	Canvas.prototype.removeText = function(layer, text, font, angle) {                                                    // 399
		if (text == null) {                                                                                                  // 400
			var layerCache = this._textCache[layer];                                                                            // 401
			if (layerCache != null) {                                                                                           // 402
				for (var styleKey in layerCache) {                                                                                 // 403
					if (hasOwnProperty.call(layerCache, styleKey)) {                                                                  // 404
						var styleCache = layerCache[styleKey]                                                                            // 405
						for (var key in styleCache) {                                                                                    // 406
							if (hasOwnProperty.call(styleCache, key)) {                                                                     // 407
								styleCache[key].active = false;                                                                                // 408
							}                                                                                                               // 409
						}                                                                                                                // 410
					}                                                                                                                 // 411
				}                                                                                                                  // 412
			}                                                                                                                   // 413
		} else {                                                                                                             // 414
			this.getTextInfo(layer, text, font, angle).active = false;                                                          // 415
		}                                                                                                                    // 416
	};                                                                                                                    // 417
                                                                                                                       // 418
	///////////////////////////////////////////////////////////////////////////                                           // 419
	// The top-level container for the entire plot.                                                                       // 420
                                                                                                                       // 421
    function Plot(placeholder, data_, options_, plugins) {                                                             // 422
        // data is on the form:                                                                                        // 423
        //   [ series1, series2 ... ]                                                                                  // 424
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]                                         // 425
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }                                          // 426
                                                                                                                       // 427
        var series = [],                                                                                               // 428
            options = {                                                                                                // 429
                // the color theme used for graphs                                                                     // 430
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],                                       // 431
                legend: {                                                                                              // 432
                    show: true,                                                                                        // 433
                    noColumns: 1, // number of colums in legend table                                                  // 434
                    labelFormatter: null, // fn: string -> string                                                      // 435
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes                            // 436
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot                                // 438
                    margin: 5, // distance from grid edge to default legend container within plot                      // 439
                    backgroundColor: null, // null means auto-detect                                                   // 440
                    backgroundOpacity: 0.85, // set to 0 to avoid background                                           // 441
                    sorted: null    // default to no legend sorting                                                    // 442
                },                                                                                                     // 443
                xaxis: {                                                                                               // 444
                    show: null, // null = auto-detect, true = always, false = never                                    // 445
                    position: "bottom", // or "top"                                                                    // 446
                    mode: null, // null or "time"                                                                      // 447
                    timezone: null, // "browser" for local to the client or timezone for timezone-js                   // 448
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks                                                          // 450
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"                     // 451
                    transform: null, // null or f: number -> number to transform axis                                  // 452
                    inverseTransform: null, // if transform is set, this should be the inverse function                // 453
                    min: null, // min. value to show, null means set automatically                                     // 454
                    max: null, // max. value to show, null means set automatically                                     // 455
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max                               // 456
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string                                                       // 458
                    labelWidth: null, // size of tick labels in pixels                                                 // 459
                    labelHeight: null,                                                                                 // 460
                    reserveSpace: null, // whether to reserve space even if axis isn't shown                           // 461
                    tickLength: null, // size in pixels of ticks, or "full" for whole line                             // 462
                    alignTicksWithAxis: null, // axis number or null for no sync                                       // 463
                                                                                                                       // 464
                    // mode specific options                                                                           // 465
                    tickDecimals: null, // no. of decimals, null means auto                                            // 466
                    tickSize: null, // number or [number, "unit"]                                                      // 467
                    minTickSize: null, // number or [number, "unit"]                                                   // 468
                    monthNames: null, // list of names of months                                                       // 469
                    timeformat: null, // format string to use                                                          // 470
                    twelveHourClock: false // 12 or 24 time in time mode                                               // 471
                },                                                                                                     // 472
                yaxis: {                                                                                               // 473
                    autoscaleMargin: 0.02,                                                                             // 474
                    position: "left" // or "right"                                                                     // 475
                },                                                                                                     // 476
                xaxes: [],                                                                                             // 477
                yaxes: [],                                                                                             // 478
                series: {                                                                                              // 479
                    points: {                                                                                          // 480
                        show: false,                                                                                   // 481
                        radius: 3,                                                                                     // 482
                        lineWidth: 2, // in pixels                                                                     // 483
                        fill: true,                                                                                    // 484
                        fillColor: "#ffffff",                                                                          // 485
                        symbol: "circle" // or callback                                                                // 486
                    },                                                                                                 // 487
                    lines: {                                                                                           // 488
                        // we don't put in show: false so we can see                                                   // 489
                        // whether lines were actively disabled                                                        // 490
                        lineWidth: 2, // in pixels                                                                     // 491
                        fill: false,                                                                                   // 492
                        fillColor: null,                                                                               // 493
                        steps: false                                                                                   // 494
                        // Omit 'zero', so we can later default its value to                                           // 495
                        // match that of the 'fill' option.                                                            // 496
                    },                                                                                                 // 497
                    bars: {                                                                                            // 498
                        show: false,                                                                                   // 499
                        lineWidth: 2, // in pixels                                                                     // 500
                        barWidth: 1, // in units of the x axis                                                         // 501
                        fill: true,                                                                                    // 502
                        fillColor: null,                                                                               // 503
                        align: "left", // "left", "right", or "center"                                                 // 504
                        horizontal: false,                                                                             // 505
                        zero: true                                                                                     // 506
                    },                                                                                                 // 507
                    shadowSize: 3,                                                                                     // 508
                    highlightColor: null                                                                               // 509
                },                                                                                                     // 510
                grid: {                                                                                                // 511
                    show: true,                                                                                        // 512
                    aboveData: false,                                                                                  // 513
                    color: "#545454", // primary color used for outline and labels                                     // 514
                    backgroundColor: null, // null for transparent, else color                                         // 515
                    borderColor: null, // set if different from the grid color                                         // 516
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"                                   // 517
                    margin: 0, // distance from the canvas edge to the grid                                            // 518
                    labelMargin: 5, // in pixels                                                                       // 519
                    axisMargin: 8, // in pixels                                                                        // 520
                    borderWidth: 2, // in pixels                                                                       // 521
                    minBorderMargin: null, // in pixels, null means taken from points radius                           // 522
                    markings: null, // array of ranges or fn: axes -> array of ranges                                  // 523
                    markingsColor: "#f4f4f4",                                                                          // 524
                    markingsLineWidth: 2,                                                                              // 525
                    // interactive stuff                                                                               // 526
                    clickable: false,                                                                                  // 527
                    hoverable: false,                                                                                  // 528
                    autoHighlight: true, // highlight in case mouse is near                                            // 529
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item                         // 530
                },                                                                                                     // 531
                interaction: {                                                                                         // 532
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow                      // 533
                },                                                                                                     // 534
                hooks: {}                                                                                              // 535
            },                                                                                                         // 536
        surface = null,     // the canvas for the plot itself                                                          // 537
        overlay = null,     // canvas for interactive stuff on top of plot                                             // 538
        eventHolder = null, // jQuery object that events should be bound to                                            // 539
        ctx = null, octx = null,                                                                                       // 540
        xaxes = [], yaxes = [],                                                                                        // 541
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},                                                          // 542
        plotWidth = 0, plotHeight = 0,                                                                                 // 543
        hooks = {                                                                                                      // 544
            processOptions: [],                                                                                        // 545
            processRawData: [],                                                                                        // 546
            processDatapoints: [],                                                                                     // 547
            processOffset: [],                                                                                         // 548
            drawBackground: [],                                                                                        // 549
            drawSeries: [],                                                                                            // 550
            draw: [],                                                                                                  // 551
            bindEvents: [],                                                                                            // 552
            drawOverlay: [],                                                                                           // 553
            shutdown: []                                                                                               // 554
        },                                                                                                             // 555
        plot = this;                                                                                                   // 556
                                                                                                                       // 557
        // public functions                                                                                            // 558
        plot.setData = setData;                                                                                        // 559
        plot.setupGrid = setupGrid;                                                                                    // 560
        plot.draw = draw;                                                                                              // 561
        plot.getPlaceholder = function() { return placeholder; };                                                      // 562
        plot.getCanvas = function() { return surface.element; };                                                       // 563
        plot.getPlotOffset = function() { return plotOffset; };                                                        // 564
        plot.width = function () { return plotWidth; };                                                                // 565
        plot.height = function () { return plotHeight; };                                                              // 566
        plot.offset = function () {                                                                                    // 567
            var o = eventHolder.offset();                                                                              // 568
            o.left += plotOffset.left;                                                                                 // 569
            o.top += plotOffset.top;                                                                                   // 570
            return o;                                                                                                  // 571
        };                                                                                                             // 572
        plot.getData = function () { return series; };                                                                 // 573
        plot.getAxes = function () {                                                                                   // 574
            var res = {}, i;                                                                                           // 575
            $.each(xaxes.concat(yaxes), function (_, axis) {                                                           // 576
                if (axis)                                                                                              // 577
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;                                 // 578
            });                                                                                                        // 579
            return res;                                                                                                // 580
        };                                                                                                             // 581
        plot.getXAxes = function () { return xaxes; };                                                                 // 582
        plot.getYAxes = function () { return yaxes; };                                                                 // 583
        plot.c2p = canvasToAxisCoords;                                                                                 // 584
        plot.p2c = axisToCanvasCoords;                                                                                 // 585
        plot.getOptions = function () { return options; };                                                             // 586
        plot.highlight = highlight;                                                                                    // 587
        plot.unhighlight = unhighlight;                                                                                // 588
        plot.triggerRedrawOverlay = triggerRedrawOverlay;                                                              // 589
        plot.pointOffset = function(point) {                                                                           // 590
            return {                                                                                                   // 591
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),                 // 592
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)                    // 593
            };                                                                                                         // 594
        };                                                                                                             // 595
        plot.shutdown = shutdown;                                                                                      // 596
        plot.resize = function () {                                                                                    // 597
        	var width = placeholder.width(),                                                                              // 598
        		height = placeholder.height();                                                                               // 599
            surface.resize(width, height);                                                                             // 600
            overlay.resize(width, height);                                                                             // 601
        };                                                                                                             // 602
                                                                                                                       // 603
        // public attributes                                                                                           // 604
        plot.hooks = hooks;                                                                                            // 605
                                                                                                                       // 606
        // initialize                                                                                                  // 607
        initPlugins(plot);                                                                                             // 608
        parseOptions(options_);                                                                                        // 609
        setupCanvases();                                                                                               // 610
        setData(data_);                                                                                                // 611
        setupGrid();                                                                                                   // 612
        draw();                                                                                                        // 613
        bindEvents();                                                                                                  // 614
                                                                                                                       // 615
                                                                                                                       // 616
        function executeHooks(hook, args) {                                                                            // 617
            args = [plot].concat(args);                                                                                // 618
            for (var i = 0; i < hook.length; ++i)                                                                      // 619
                hook[i].apply(this, args);                                                                             // 620
        }                                                                                                              // 621
                                                                                                                       // 622
        function initPlugins() {                                                                                       // 623
                                                                                                                       // 624
            // References to key classes, allowing plugins to modify them                                              // 625
                                                                                                                       // 626
            var classes = {                                                                                            // 627
                Canvas: Canvas                                                                                         // 628
            };                                                                                                         // 629
                                                                                                                       // 630
            for (var i = 0; i < plugins.length; ++i) {                                                                 // 631
                var p = plugins[i];                                                                                    // 632
                p.init(plot, classes);                                                                                 // 633
                if (p.options)                                                                                         // 634
                    $.extend(true, options, p.options);                                                                // 635
            }                                                                                                          // 636
        }                                                                                                              // 637
                                                                                                                       // 638
        function parseOptions(opts) {                                                                                  // 639
                                                                                                                       // 640
            $.extend(true, options, opts);                                                                             // 641
                                                                                                                       // 642
            if (options.xaxis.color == null)                                                                           // 643
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();                   // 644
            if (options.yaxis.color == null)                                                                           // 645
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();                   // 646
                                                                                                                       // 647
            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility                              // 648
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;                               // 649
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility                              // 650
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;                               // 651
                                                                                                                       // 652
            if (options.grid.borderColor == null)                                                                      // 653
                options.grid.borderColor = options.grid.color;                                                         // 654
            if (options.grid.tickColor == null)                                                                        // 655
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();                // 656
                                                                                                                       // 657
            // Fill in defaults for axis options, including any unspecified                                            // 658
            // font-spec fields, if a font-spec was provided.                                                          // 659
                                                                                                                       // 660
            // If no x/y axis options were provided, create one of each anyway,                                        // 661
            // since the rest of the code assumes that they exist.                                                     // 662
                                                                                                                       // 663
            var i, axisOptions, axisCount,                                                                             // 664
                fontDefaults = {                                                                                       // 665
                    style: placeholder.css("font-style"),                                                              // 666
                    size: Math.round(0.8 * (+placeholder.css("font-size").replace("px", "") || 13)),                   // 667
                    variant: placeholder.css("font-variant"),                                                          // 668
                    weight: placeholder.css("font-weight"),                                                            // 669
                    family: placeholder.css("font-family")                                                             // 670
                };                                                                                                     // 671
                                                                                                                       // 672
            axisCount = options.xaxes.length || 1;                                                                     // 673
            for (i = 0; i < axisCount; ++i) {                                                                          // 674
                axisOptions = $.extend(true, {}, options.xaxis, options.xaxes[i]);                                     // 675
                options.xaxes[i] = axisOptions;                                                                        // 676
                if (axisOptions.font) {                                                                                // 677
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);                                   // 678
                    if (!axisOptions.font.color) {                                                                     // 679
                        axisOptions.font.color = axisOptions.color;                                                    // 680
                    }                                                                                                  // 681
                }                                                                                                      // 682
            }                                                                                                          // 683
                                                                                                                       // 684
            axisCount = options.yaxes.length || 1;                                                                     // 685
            for (i = 0; i < axisCount; ++i) {                                                                          // 686
                axisOptions = $.extend(true, {}, options.yaxis, options.yaxes[i]);                                     // 687
                options.yaxes[i] = axisOptions;                                                                        // 688
                if (axisOptions.font) {                                                                                // 689
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);                                   // 690
                    if (!axisOptions.font.color) {                                                                     // 691
                        axisOptions.font.color = axisOptions.color;                                                    // 692
                    }                                                                                                  // 693
                }                                                                                                      // 694
            }                                                                                                          // 695
                                                                                                                       // 696
            // backwards compatibility, to be removed in future                                                        // 697
            if (options.xaxis.noTicks && options.xaxis.ticks == null)                                                  // 698
                options.xaxis.ticks = options.xaxis.noTicks;                                                           // 699
            if (options.yaxis.noTicks && options.yaxis.ticks == null)                                                  // 700
                options.yaxis.ticks = options.yaxis.noTicks;                                                           // 701
            if (options.x2axis) {                                                                                      // 702
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);                                  // 703
                options.xaxes[1].position = "top";                                                                     // 704
            }                                                                                                          // 705
            if (options.y2axis) {                                                                                      // 706
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);                                  // 707
                options.yaxes[1].position = "right";                                                                   // 708
            }                                                                                                          // 709
            if (options.grid.coloredAreas)                                                                             // 710
                options.grid.markings = options.grid.coloredAreas;                                                     // 711
            if (options.grid.coloredAreasColor)                                                                        // 712
                options.grid.markingsColor = options.grid.coloredAreasColor;                                           // 713
            if (options.lines)                                                                                         // 714
                $.extend(true, options.series.lines, options.lines);                                                   // 715
            if (options.points)                                                                                        // 716
                $.extend(true, options.series.points, options.points);                                                 // 717
            if (options.bars)                                                                                          // 718
                $.extend(true, options.series.bars, options.bars);                                                     // 719
            if (options.shadowSize != null)                                                                            // 720
                options.series.shadowSize = options.shadowSize;                                                        // 721
            if (options.highlightColor != null)                                                                        // 722
                options.series.highlightColor = options.highlightColor;                                                // 723
                                                                                                                       // 724
            // save options on axes for future reference                                                               // 725
            for (i = 0; i < options.xaxes.length; ++i)                                                                 // 726
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];                                              // 727
            for (i = 0; i < options.yaxes.length; ++i)                                                                 // 728
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];                                              // 729
                                                                                                                       // 730
            // add hooks from options                                                                                  // 731
            for (var n in hooks)                                                                                       // 732
                if (options.hooks[n] && options.hooks[n].length)                                                       // 733
                    hooks[n] = hooks[n].concat(options.hooks[n]);                                                      // 734
                                                                                                                       // 735
            executeHooks(hooks.processOptions, [options]);                                                             // 736
        }                                                                                                              // 737
                                                                                                                       // 738
        function setData(d) {                                                                                          // 739
            series = parseData(d);                                                                                     // 740
            fillInSeriesOptions();                                                                                     // 741
            processData();                                                                                             // 742
        }                                                                                                              // 743
                                                                                                                       // 744
        function parseData(d) {                                                                                        // 745
            var res = [];                                                                                              // 746
            for (var i = 0; i < d.length; ++i) {                                                                       // 747
                var s = $.extend(true, {}, options.series);                                                            // 748
                                                                                                                       // 749
                if (d[i].data != null) {                                                                               // 750
                    s.data = d[i].data; // move the data instead of deep-copy                                          // 751
                    delete d[i].data;                                                                                  // 752
                                                                                                                       // 753
                    $.extend(true, s, d[i]);                                                                           // 754
                                                                                                                       // 755
                    d[i].data = s.data;                                                                                // 756
                }                                                                                                      // 757
                else                                                                                                   // 758
                    s.data = d[i];                                                                                     // 759
                res.push(s);                                                                                           // 760
            }                                                                                                          // 761
                                                                                                                       // 762
            return res;                                                                                                // 763
        }                                                                                                              // 764
                                                                                                                       // 765
        function axisNumber(obj, coord) {                                                                              // 766
            var a = obj[coord + "axis"];                                                                               // 767
            if (typeof a == "object") // if we got a real axis, extract number                                         // 768
                a = a.n;                                                                                               // 769
            if (typeof a != "number")                                                                                  // 770
                a = 1; // default to first axis                                                                        // 771
            return a;                                                                                                  // 772
        }                                                                                                              // 773
                                                                                                                       // 774
        function allAxes() {                                                                                           // 775
            // return flat array without annoying null entries                                                         // 776
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });                                            // 777
        }                                                                                                              // 778
                                                                                                                       // 779
        function canvasToAxisCoords(pos) {                                                                             // 780
            // return an object with x/y corresponding to all used axes                                                // 781
            var res = {}, i, axis;                                                                                     // 782
            for (i = 0; i < xaxes.length; ++i) {                                                                       // 783
                axis = xaxes[i];                                                                                       // 784
                if (axis && axis.used)                                                                                 // 785
                    res["x" + axis.n] = axis.c2p(pos.left);                                                            // 786
            }                                                                                                          // 787
                                                                                                                       // 788
            for (i = 0; i < yaxes.length; ++i) {                                                                       // 789
                axis = yaxes[i];                                                                                       // 790
                if (axis && axis.used)                                                                                 // 791
                    res["y" + axis.n] = axis.c2p(pos.top);                                                             // 792
            }                                                                                                          // 793
                                                                                                                       // 794
            if (res.x1 !== undefined)                                                                                  // 795
                res.x = res.x1;                                                                                        // 796
            if (res.y1 !== undefined)                                                                                  // 797
                res.y = res.y1;                                                                                        // 798
                                                                                                                       // 799
            return res;                                                                                                // 800
        }                                                                                                              // 801
                                                                                                                       // 802
        function axisToCanvasCoords(pos) {                                                                             // 803
            // get canvas coords from the first pair of x/y found in pos                                               // 804
            var res = {}, i, axis, key;                                                                                // 805
                                                                                                                       // 806
            for (i = 0; i < xaxes.length; ++i) {                                                                       // 807
                axis = xaxes[i];                                                                                       // 808
                if (axis && axis.used) {                                                                               // 809
                    key = "x" + axis.n;                                                                                // 810
                    if (pos[key] == null && axis.n == 1)                                                               // 811
                        key = "x";                                                                                     // 812
                                                                                                                       // 813
                    if (pos[key] != null) {                                                                            // 814
                        res.left = axis.p2c(pos[key]);                                                                 // 815
                        break;                                                                                         // 816
                    }                                                                                                  // 817
                }                                                                                                      // 818
            }                                                                                                          // 819
                                                                                                                       // 820
            for (i = 0; i < yaxes.length; ++i) {                                                                       // 821
                axis = yaxes[i];                                                                                       // 822
                if (axis && axis.used) {                                                                               // 823
                    key = "y" + axis.n;                                                                                // 824
                    if (pos[key] == null && axis.n == 1)                                                               // 825
                        key = "y";                                                                                     // 826
                                                                                                                       // 827
                    if (pos[key] != null) {                                                                            // 828
                        res.top = axis.p2c(pos[key]);                                                                  // 829
                        break;                                                                                         // 830
                    }                                                                                                  // 831
                }                                                                                                      // 832
            }                                                                                                          // 833
                                                                                                                       // 834
            return res;                                                                                                // 835
        }                                                                                                              // 836
                                                                                                                       // 837
        function getOrCreateAxis(axes, number) {                                                                       // 838
            if (!axes[number - 1])                                                                                     // 839
                axes[number - 1] = {                                                                                   // 840
                    n: number, // save the number for future reference                                                 // 841
                    direction: axes == xaxes ? "x" : "y",                                                              // 842
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)                         // 843
                };                                                                                                     // 844
                                                                                                                       // 845
            return axes[number - 1];                                                                                   // 846
        }                                                                                                              // 847
                                                                                                                       // 848
        function fillInSeriesOptions() {                                                                               // 849
                                                                                                                       // 850
            var neededColors = series.length, maxIndex = -1, i;                                                        // 851
                                                                                                                       // 852
            // Subtract the number of series that already have fixed colors or                                         // 853
            // color indexes from the number that we still need to generate.                                           // 854
                                                                                                                       // 855
            for (i = 0; i < series.length; ++i) {                                                                      // 856
                var sc = series[i].color;                                                                              // 857
                if (sc != null) {                                                                                      // 858
                    neededColors--;                                                                                    // 859
                    if (typeof sc == "number" && sc > maxIndex) {                                                      // 860
                        maxIndex = sc;                                                                                 // 861
                    }                                                                                                  // 862
                }                                                                                                      // 863
            }                                                                                                          // 864
                                                                                                                       // 865
            // If any of the series have fixed color indexes, then we need to                                          // 866
            // generate at least as many colors as the highest index.                                                  // 867
                                                                                                                       // 868
            if (neededColors <= maxIndex) {                                                                            // 869
                neededColors = maxIndex + 1;                                                                           // 870
            }                                                                                                          // 871
                                                                                                                       // 872
            // Generate all the colors, using first the option colors and then                                         // 873
            // variations on those colors once they're exhausted.                                                      // 874
                                                                                                                       // 875
            var c, colors = [], colorPool = options.colors,                                                            // 876
                colorPoolSize = colorPool.length, variation = 0;                                                       // 877
                                                                                                                       // 878
            for (i = 0; i < neededColors; i++) {                                                                       // 879
                                                                                                                       // 880
                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");                                             // 881
                                                                                                                       // 882
                // Each time we exhaust the colors in the pool we adjust                                               // 883
                // a scaling factor used to produce more variations on                                                 // 884
                // those colors. The factor alternates negative/positive                                               // 885
                // to produce lighter/darker colors.                                                                   // 886
                                                                                                                       // 887
                // Reset the variation after every few cycles, or else                                                 // 888
                // it will end up producing only white or black colors.                                                // 889
                                                                                                                       // 890
                if (i % colorPoolSize == 0 && i) {                                                                     // 891
                    if (variation >= 0) {                                                                              // 892
                        if (variation < 0.5) {                                                                         // 893
                            variation = -variation - 0.2;                                                              // 894
                        } else variation = 0;                                                                          // 895
                    } else variation = -variation;                                                                     // 896
                }                                                                                                      // 897
                                                                                                                       // 898
                colors[i] = c.scale('rgb', 1 + variation);                                                             // 899
            }                                                                                                          // 900
                                                                                                                       // 901
            // Finalize the series options, filling in their colors                                                    // 902
                                                                                                                       // 903
            var colori = 0, s;                                                                                         // 904
            for (i = 0; i < series.length; ++i) {                                                                      // 905
                s = series[i];                                                                                         // 906
                                                                                                                       // 907
                // assign colors                                                                                       // 908
                if (s.color == null) {                                                                                 // 909
                    s.color = colors[colori].toString();                                                               // 910
                    ++colori;                                                                                          // 911
                }                                                                                                      // 912
                else if (typeof s.color == "number")                                                                   // 913
                    s.color = colors[s.color].toString();                                                              // 914
                                                                                                                       // 915
                // turn on lines automatically in case nothing is set                                                  // 916
                if (s.lines.show == null) {                                                                            // 917
                    var v, show = true;                                                                                // 918
                    for (v in s)                                                                                       // 919
                        if (s[v] && s[v].show) {                                                                       // 920
                            show = false;                                                                              // 921
                            break;                                                                                     // 922
                        }                                                                                              // 923
                    if (show)                                                                                          // 924
                        s.lines.show = true;                                                                           // 925
                }                                                                                                      // 926
                                                                                                                       // 927
                // If nothing was provided for lines.zero, default it to match                                         // 928
                // lines.fill, since areas by default should extend to zero.                                           // 929
                                                                                                                       // 930
                if (s.lines.zero == null) {                                                                            // 931
                    s.lines.zero = !!s.lines.fill;                                                                     // 932
                }                                                                                                      // 933
                                                                                                                       // 934
                // setup axes                                                                                          // 935
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));                                                  // 936
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));                                                  // 937
            }                                                                                                          // 938
        }                                                                                                              // 939
                                                                                                                       // 940
        function processData() {                                                                                       // 941
            var topSentry = Number.POSITIVE_INFINITY,                                                                  // 942
                bottomSentry = Number.NEGATIVE_INFINITY,                                                               // 943
                fakeInfinity = Number.MAX_VALUE,                                                                       // 944
                i, j, k, m, length,                                                                                    // 945
                s, points, ps, x, y, axis, val, f, p,                                                                  // 946
                data, format;                                                                                          // 947
                                                                                                                       // 948
            function updateAxis(axis, min, max) {                                                                      // 949
                if (min < axis.datamin && min != -fakeInfinity)                                                        // 950
                    axis.datamin = min;                                                                                // 951
                if (max > axis.datamax && max != fakeInfinity)                                                         // 952
                    axis.datamax = max;                                                                                // 953
            }                                                                                                          // 954
                                                                                                                       // 955
            $.each(allAxes(), function (_, axis) {                                                                     // 956
                // init axis                                                                                           // 957
                axis.datamin = topSentry;                                                                              // 958
                axis.datamax = bottomSentry;                                                                           // 959
                axis.used = false;                                                                                     // 960
            });                                                                                                        // 961
                                                                                                                       // 962
            for (i = 0; i < series.length; ++i) {                                                                      // 963
                s = series[i];                                                                                         // 964
                s.datapoints = { points: [] };                                                                         // 965
                                                                                                                       // 966
                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);                                       // 967
            }                                                                                                          // 968
                                                                                                                       // 969
            // first pass: clean and copy data                                                                         // 970
            for (i = 0; i < series.length; ++i) {                                                                      // 971
                s = series[i];                                                                                         // 972
                                                                                                                       // 973
                data = s.data;                                                                                         // 974
                format = s.datapoints.format;                                                                          // 975
                                                                                                                       // 976
                if (!format) {                                                                                         // 977
                    format = [];                                                                                       // 978
                    // find out how to copy                                                                            // 979
                    format.push({ x: true, number: true, required: true });                                            // 980
                    format.push({ y: true, number: true, required: true });                                            // 981
                                                                                                                       // 982
                    if (s.bars.show || (s.lines.show && s.lines.fill)) {                                               // 983
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));            // 984
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {                                                                       // 986
                            delete format[format.length - 1].y;                                                        // 987
                            format[format.length - 1].x = true;                                                        // 988
                        }                                                                                              // 989
                    }                                                                                                  // 990
                                                                                                                       // 991
                    s.datapoints.format = format;                                                                      // 992
                }                                                                                                      // 993
                                                                                                                       // 994
                if (s.datapoints.pointsize != null)                                                                    // 995
                    continue; // already filled in                                                                     // 996
                                                                                                                       // 997
                s.datapoints.pointsize = format.length;                                                                // 998
                                                                                                                       // 999
                ps = s.datapoints.pointsize;                                                                           // 1000
                points = s.datapoints.points;                                                                          // 1001
                                                                                                                       // 1002
                var insertSteps = s.lines.show && s.lines.steps;                                                       // 1003
                s.xaxis.used = s.yaxis.used = true;                                                                    // 1004
                                                                                                                       // 1005
                for (j = k = 0; j < data.length; ++j, k += ps) {                                                       // 1006
                    p = data[j];                                                                                       // 1007
                                                                                                                       // 1008
                    var nullify = p == null;                                                                           // 1009
                    if (!nullify) {                                                                                    // 1010
                        for (m = 0; m < ps; ++m) {                                                                     // 1011
                            val = p[m];                                                                                // 1012
                            f = format[m];                                                                             // 1013
                                                                                                                       // 1014
                            if (f) {                                                                                   // 1015
                                if (f.number && val != null) {                                                         // 1016
                                    val = +val; // convert to number                                                   // 1017
                                    if (isNaN(val))                                                                    // 1018
                                        val = null;                                                                    // 1019
                                    else if (val == Infinity)                                                          // 1020
                                        val = fakeInfinity;                                                            // 1021
                                    else if (val == -Infinity)                                                         // 1022
                                        val = -fakeInfinity;                                                           // 1023
                                }                                                                                      // 1024
                                                                                                                       // 1025
                                if (val == null) {                                                                     // 1026
                                    if (f.required)                                                                    // 1027
                                        nullify = true;                                                                // 1028
                                                                                                                       // 1029
                                    if (f.defaultValue != null)                                                        // 1030
                                        val = f.defaultValue;                                                          // 1031
                                }                                                                                      // 1032
                            }                                                                                          // 1033
                                                                                                                       // 1034
                            points[k + m] = val;                                                                       // 1035
                        }                                                                                              // 1036
                    }                                                                                                  // 1037
                                                                                                                       // 1038
                    if (nullify) {                                                                                     // 1039
                        for (m = 0; m < ps; ++m) {                                                                     // 1040
                            val = points[k + m];                                                                       // 1041
                            if (val != null) {                                                                         // 1042
                                f = format[m];                                                                         // 1043
                                // extract min/max info                                                                // 1044
                                if (f.x)                                                                               // 1045
                                    updateAxis(s.xaxis, val, val);                                                     // 1046
                                if (f.y)                                                                               // 1047
                                    updateAxis(s.yaxis, val, val);                                                     // 1048
                            }                                                                                          // 1049
                            points[k + m] = null;                                                                      // 1050
                        }                                                                                              // 1051
                    }                                                                                                  // 1052
                    else {                                                                                             // 1053
                        // a little bit of line specific stuff that                                                    // 1054
                        // perhaps shouldn't be here, but lacking                                                      // 1055
                        // better means...                                                                             // 1056
                        if (insertSteps && k > 0                                                                       // 1057
                            && points[k - ps] != null                                                                  // 1058
                            && points[k - ps] != points[k]                                                             // 1059
                            && points[k - ps + 1] != points[k + 1]) {                                                  // 1060
                            // copy the point to make room for a middle point                                          // 1061
                            for (m = 0; m < ps; ++m)                                                                   // 1062
                                points[k + ps + m] = points[k + m];                                                    // 1063
                                                                                                                       // 1064
                            // middle point has same y                                                                 // 1065
                            points[k + 1] = points[k - ps + 1];                                                        // 1066
                                                                                                                       // 1067
                            // we've added a point, better reflect that                                                // 1068
                            k += ps;                                                                                   // 1069
                        }                                                                                              // 1070
                    }                                                                                                  // 1071
                }                                                                                                      // 1072
            }                                                                                                          // 1073
                                                                                                                       // 1074
            // give the hooks a chance to run                                                                          // 1075
            for (i = 0; i < series.length; ++i) {                                                                      // 1076
                s = series[i];                                                                                         // 1077
                                                                                                                       // 1078
                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);                                             // 1079
            }                                                                                                          // 1080
                                                                                                                       // 1081
            // second pass: find datamax/datamin for auto-scaling                                                      // 1082
            for (i = 0; i < series.length; ++i) {                                                                      // 1083
                s = series[i];                                                                                         // 1084
                points = s.datapoints.points,                                                                          // 1085
                ps = s.datapoints.pointsize;                                                                           // 1086
                format = s.datapoints.format;                                                                          // 1087
                                                                                                                       // 1088
                var xmin = topSentry, ymin = topSentry,                                                                // 1089
                    xmax = bottomSentry, ymax = bottomSentry;                                                          // 1090
                                                                                                                       // 1091
                for (j = 0; j < points.length; j += ps) {                                                              // 1092
                    if (points[j] == null)                                                                             // 1093
                        continue;                                                                                      // 1094
                                                                                                                       // 1095
                    for (m = 0; m < ps; ++m) {                                                                         // 1096
                        val = points[j + m];                                                                           // 1097
                        f = format[m];                                                                                 // 1098
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)                // 1099
                            continue;                                                                                  // 1100
                                                                                                                       // 1101
                        if (f.x) {                                                                                     // 1102
                            if (val < xmin)                                                                            // 1103
                                xmin = val;                                                                            // 1104
                            if (val > xmax)                                                                            // 1105
                                xmax = val;                                                                            // 1106
                        }                                                                                              // 1107
                        if (f.y) {                                                                                     // 1108
                            if (val < ymin)                                                                            // 1109
                                ymin = val;                                                                            // 1110
                            if (val > ymax)                                                                            // 1111
                                ymax = val;                                                                            // 1112
                        }                                                                                              // 1113
                    }                                                                                                  // 1114
                }                                                                                                      // 1115
                                                                                                                       // 1116
                if (s.bars.show) {                                                                                     // 1117
                    // make sure we got room for the bar on the dancing floor                                          // 1118
                    var delta;                                                                                         // 1119
                                                                                                                       // 1120
                    switch (s.bars.align) {                                                                            // 1121
                        case "left":                                                                                   // 1122
                            delta = 0;                                                                                 // 1123
                            break;                                                                                     // 1124
                        case "right":                                                                                  // 1125
                            delta = -s.bars.barWidth;                                                                  // 1126
                            break;                                                                                     // 1127
                        case "center":                                                                                 // 1128
                            delta = -s.bars.barWidth / 2;                                                              // 1129
                            break;                                                                                     // 1130
                        default:                                                                                       // 1131
                            throw new Error("Invalid bar alignment: " + s.bars.align);                                 // 1132
                    }                                                                                                  // 1133
                                                                                                                       // 1134
                    if (s.bars.horizontal) {                                                                           // 1135
                        ymin += delta;                                                                                 // 1136
                        ymax += delta + s.bars.barWidth;                                                               // 1137
                    }                                                                                                  // 1138
                    else {                                                                                             // 1139
                        xmin += delta;                                                                                 // 1140
                        xmax += delta + s.bars.barWidth;                                                               // 1141
                    }                                                                                                  // 1142
                }                                                                                                      // 1143
                                                                                                                       // 1144
                updateAxis(s.xaxis, xmin, xmax);                                                                       // 1145
                updateAxis(s.yaxis, ymin, ymax);                                                                       // 1146
            }                                                                                                          // 1147
                                                                                                                       // 1148
            $.each(allAxes(), function (_, axis) {                                                                     // 1149
                if (axis.datamin == topSentry)                                                                         // 1150
                    axis.datamin = null;                                                                               // 1151
                if (axis.datamax == bottomSentry)                                                                      // 1152
                    axis.datamax = null;                                                                               // 1153
            });                                                                                                        // 1154
        }                                                                                                              // 1155
                                                                                                                       // 1156
        function setupCanvases() {                                                                                     // 1157
                                                                                                                       // 1158
            // Make sure the placeholder is clear of everything except canvases                                        // 1159
            // from a previous plot in this container that we'll try to re-use.                                        // 1160
                                                                                                                       // 1161
            placeholder.css("padding", 0) // padding messes up the positioning                                         // 1162
                .children(":not(.flot-base,.flot-overlay)").remove();                                                  // 1163
                                                                                                                       // 1164
            if (placeholder.css("position") == 'static')                                                               // 1165
                placeholder.css("position", "relative"); // for positioning labels and overlay                         // 1166
                                                                                                                       // 1167
            surface = new Canvas("flot-base", placeholder);                                                            // 1168
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features              // 1169
                                                                                                                       // 1170
            ctx = surface.context;                                                                                     // 1171
            octx = overlay.context;                                                                                    // 1172
                                                                                                                       // 1173
            // define which element we're listening for events on                                                      // 1174
            eventHolder = $(overlay.element).unbind();                                                                 // 1175
                                                                                                                       // 1176
            // If we're re-using a plot object, shut down the old one                                                  // 1177
                                                                                                                       // 1178
            var existing = placeholder.data("plot");                                                                   // 1179
                                                                                                                       // 1180
            if (existing) {                                                                                            // 1181
                existing.shutdown();                                                                                   // 1182
                overlay.clear();                                                                                       // 1183
            }                                                                                                          // 1184
                                                                                                                       // 1185
            // save in case we get replotted                                                                           // 1186
            placeholder.data("plot", plot);                                                                            // 1187
        }                                                                                                              // 1188
                                                                                                                       // 1189
        function bindEvents() {                                                                                        // 1190
            // bind events                                                                                             // 1191
            if (options.grid.hoverable) {                                                                              // 1192
                eventHolder.mousemove(onMouseMove);                                                                    // 1193
                                                                                                                       // 1194
                // Use bind, rather than .mouseleave, because we officially                                            // 1195
                // still support jQuery 1.2.6, which doesn't define a shortcut                                         // 1196
                // for mouseenter or mouseleave.  This was a bug/oversight that                                        // 1197
                // was fixed somewhere around 1.3.x.  We can return to using                                           // 1198
                // .mouseleave when we drop support for 1.2.6.                                                         // 1199
                                                                                                                       // 1200
                eventHolder.bind("mouseleave", onMouseLeave);                                                          // 1201
            }                                                                                                          // 1202
                                                                                                                       // 1203
            if (options.grid.clickable)                                                                                // 1204
                eventHolder.click(onClick);                                                                            // 1205
                                                                                                                       // 1206
            executeHooks(hooks.bindEvents, [eventHolder]);                                                             // 1207
        }                                                                                                              // 1208
                                                                                                                       // 1209
        function shutdown() {                                                                                          // 1210
            if (redrawTimeout)                                                                                         // 1211
                clearTimeout(redrawTimeout);                                                                           // 1212
                                                                                                                       // 1213
            eventHolder.unbind("mousemove", onMouseMove);                                                              // 1214
            eventHolder.unbind("mouseleave", onMouseLeave);                                                            // 1215
            eventHolder.unbind("click", onClick);                                                                      // 1216
                                                                                                                       // 1217
            executeHooks(hooks.shutdown, [eventHolder]);                                                               // 1218
        }                                                                                                              // 1219
                                                                                                                       // 1220
        function setTransformationHelpers(axis) {                                                                      // 1221
            // set helper functions on the axis, assumes plot area                                                     // 1222
            // has been computed already                                                                               // 1223
                                                                                                                       // 1224
            function identity(x) { return x; }                                                                         // 1225
                                                                                                                       // 1226
            var s, m, t = axis.options.transform || identity,                                                          // 1227
                it = axis.options.inverseTransform;                                                                    // 1228
                                                                                                                       // 1229
            // precompute how much the axis is scaling a point                                                         // 1230
            // in canvas space                                                                                         // 1231
            if (axis.direction == "x") {                                                                               // 1232
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));                                      // 1233
                m = Math.min(t(axis.max), t(axis.min));                                                                // 1234
            }                                                                                                          // 1235
            else {                                                                                                     // 1236
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));                                     // 1237
                s = -s;                                                                                                // 1238
                m = Math.max(t(axis.max), t(axis.min));                                                                // 1239
            }                                                                                                          // 1240
                                                                                                                       // 1241
            // data point to canvas coordinate                                                                         // 1242
            if (t == identity) // slight optimization                                                                  // 1243
                axis.p2c = function (p) { return (p - m) * s; };                                                       // 1244
            else                                                                                                       // 1245
                axis.p2c = function (p) { return (t(p) - m) * s; };                                                    // 1246
            // canvas coordinate to data point                                                                         // 1247
            if (!it)                                                                                                   // 1248
                axis.c2p = function (c) { return m + c / s; };                                                         // 1249
            else                                                                                                       // 1250
                axis.c2p = function (c) { return it(m + c / s); };                                                     // 1251
        }                                                                                                              // 1252
                                                                                                                       // 1253
        function measureTickLabels(axis) {                                                                             // 1254
                                                                                                                       // 1255
            var opts = axis.options, ticks = axis.ticks || [],                                                         // 1256
                axisw = opts.labelWidth || 0, axish = opts.labelHeight || 0,                                           // 1257
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",                            // 1258
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,  // 1259
                font = opts.font || "flot-tick-label tickLabel";                                                       // 1260
                                                                                                                       // 1261
            for (var i = 0; i < ticks.length; ++i) {                                                                   // 1262
                                                                                                                       // 1263
                var t = ticks[i];                                                                                      // 1264
                                                                                                                       // 1265
                if (!t.label)                                                                                          // 1266
                    continue;                                                                                          // 1267
                                                                                                                       // 1268
                var info = surface.getTextInfo(layer, t.label, font);                                                  // 1269
                                                                                                                       // 1270
                if (opts.labelWidth == null)                                                                           // 1271
                    axisw = Math.max(axisw, info.width);                                                               // 1272
                if (opts.labelHeight == null)                                                                          // 1273
                    axish = Math.max(axish, info.height);                                                              // 1274
            }                                                                                                          // 1275
                                                                                                                       // 1276
            axis.labelWidth = Math.ceil(axisw);                                                                        // 1277
            axis.labelHeight = Math.ceil(axish);                                                                       // 1278
        }                                                                                                              // 1279
                                                                                                                       // 1280
        function allocateAxisBoxFirstPhase(axis) {                                                                     // 1281
            // find the bounding box of the axis by looking at label                                                   // 1282
            // widths/heights and ticks, make room by diminishing the                                                  // 1283
            // plotOffset; this first phase only looks at one                                                          // 1284
            // dimension per axis, the other dimension depends on the                                                  // 1285
            // other axes so will have to wait                                                                         // 1286
                                                                                                                       // 1287
            var lw = axis.labelWidth,                                                                                  // 1288
                lh = axis.labelHeight,                                                                                 // 1289
                pos = axis.options.position,                                                                           // 1290
                tickLength = axis.options.tickLength,                                                                  // 1291
                axisMargin = options.grid.axisMargin,                                                                  // 1292
                padding = options.grid.labelMargin,                                                                    // 1293
                all = axis.direction == "x" ? xaxes : yaxes,                                                           // 1294
                index, innermost;                                                                                      // 1295
                                                                                                                       // 1296
            // determine axis margin                                                                                   // 1297
            var samePosition = $.grep(all, function (a) {                                                              // 1298
                return a && a.options.position == pos && a.reserveSpace;                                               // 1299
            });                                                                                                        // 1300
            if ($.inArray(axis, samePosition) == samePosition.length - 1)                                              // 1301
                axisMargin = 0; // outermost                                                                           // 1302
                                                                                                                       // 1303
            // determine tick length - if we're innermost, we can use "full"                                           // 1304
            if (tickLength == null) {                                                                                  // 1305
                var sameDirection = $.grep(all, function (a) {                                                         // 1306
                    return a && a.reserveSpace;                                                                        // 1307
                });                                                                                                    // 1308
                                                                                                                       // 1309
                innermost = $.inArray(axis, sameDirection) == 0;                                                       // 1310
                if (innermost)                                                                                         // 1311
                    tickLength = "full";                                                                               // 1312
                else                                                                                                   // 1313
                    tickLength = 5;                                                                                    // 1314
            }                                                                                                          // 1315
                                                                                                                       // 1316
            if (!isNaN(+tickLength))                                                                                   // 1317
                padding += +tickLength;                                                                                // 1318
                                                                                                                       // 1319
            // compute box                                                                                             // 1320
            if (axis.direction == "x") {                                                                               // 1321
                lh += padding;                                                                                         // 1322
                                                                                                                       // 1323
                if (pos == "bottom") {                                                                                 // 1324
                    plotOffset.bottom += lh + axisMargin;                                                              // 1325
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };                                // 1326
                }                                                                                                      // 1327
                else {                                                                                                 // 1328
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };                                       // 1329
                    plotOffset.top += lh + axisMargin;                                                                 // 1330
                }                                                                                                      // 1331
            }                                                                                                          // 1332
            else {                                                                                                     // 1333
                lw += padding;                                                                                         // 1334
                                                                                                                       // 1335
                if (pos == "left") {                                                                                   // 1336
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };                                      // 1337
                    plotOffset.left += lw + axisMargin;                                                                // 1338
                }                                                                                                      // 1339
                else {                                                                                                 // 1340
                    plotOffset.right += lw + axisMargin;                                                               // 1341
                    axis.box = { left: surface.width - plotOffset.right, width: lw };                                  // 1342
                }                                                                                                      // 1343
            }                                                                                                          // 1344
                                                                                                                       // 1345
             // save for future reference                                                                              // 1346
            axis.position = pos;                                                                                       // 1347
            axis.tickLength = tickLength;                                                                              // 1348
            axis.box.padding = padding;                                                                                // 1349
            axis.innermost = innermost;                                                                                // 1350
        }                                                                                                              // 1351
                                                                                                                       // 1352
        function allocateAxisBoxSecondPhase(axis) {                                                                    // 1353
            // now that all axis boxes have been placed in one                                                         // 1354
            // dimension, we can set the remaining dimension coordinates                                               // 1355
            if (axis.direction == "x") {                                                                               // 1356
                axis.box.left = plotOffset.left - axis.labelWidth / 2;                                                 // 1357
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;                 // 1358
            }                                                                                                          // 1359
            else {                                                                                                     // 1360
                axis.box.top = plotOffset.top - axis.labelHeight / 2;                                                  // 1361
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;              // 1362
            }                                                                                                          // 1363
        }                                                                                                              // 1364
                                                                                                                       // 1365
        function adjustLayoutForThingsStickingOut() {                                                                  // 1366
            // possibly adjust plot offset to ensure everything stays                                                  // 1367
            // inside the canvas and isn't clipped off                                                                 // 1368
                                                                                                                       // 1369
            var minMargin = options.grid.minBorderMargin,                                                              // 1370
                margins = { x: 0, y: 0 }, i, axis;                                                                     // 1371
                                                                                                                       // 1372
            // check stuff from the plot (FIXME: this should just read                                                 // 1373
            // a value from the series, otherwise it's impossible to                                                   // 1374
            // customize)                                                                                              // 1375
            if (minMargin == null) {                                                                                   // 1376
                minMargin = 0;                                                                                         // 1377
                for (i = 0; i < series.length; ++i)                                                                    // 1378
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));     // 1379
            }                                                                                                          // 1380
                                                                                                                       // 1381
            margins.x = margins.y = Math.ceil(minMargin);                                                              // 1382
                                                                                                                       // 1383
            // check axis labels, note we don't check the actual                                                       // 1384
            // labels but instead use the overall width/height to not                                                  // 1385
            // jump as much around with replots                                                                        // 1386
            $.each(allAxes(), function (_, axis) {                                                                     // 1387
                var dir = axis.direction;                                                                              // 1388
                if (axis.reserveSpace)                                                                                 // 1389
                    margins[dir] = Math.ceil(Math.max(margins[dir], (dir == "x" ? axis.labelWidth : axis.labelHeight) / 2));
            });                                                                                                        // 1391
                                                                                                                       // 1392
            plotOffset.left = Math.max(margins.x, plotOffset.left);                                                    // 1393
            plotOffset.right = Math.max(margins.x, plotOffset.right);                                                  // 1394
            plotOffset.top = Math.max(margins.y, plotOffset.top);                                                      // 1395
            plotOffset.bottom = Math.max(margins.y, plotOffset.bottom);                                                // 1396
        }                                                                                                              // 1397
                                                                                                                       // 1398
        function setupGrid() {                                                                                         // 1399
            var i, axes = allAxes(), showGrid = options.grid.show;                                                     // 1400
                                                                                                                       // 1401
            // Initialize the plot's offset from the edge of the canvas                                                // 1402
                                                                                                                       // 1403
            for (var a in plotOffset) {                                                                                // 1404
                var margin = options.grid.margin || 0;                                                                 // 1405
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;                                   // 1406
            }                                                                                                          // 1407
                                                                                                                       // 1408
            executeHooks(hooks.processOffset, [plotOffset]);                                                           // 1409
                                                                                                                       // 1410
            // If the grid is visible, add its border width to the offset                                              // 1411
                                                                                                                       // 1412
            for (var a in plotOffset) {                                                                                // 1413
                if(typeof(options.grid.borderWidth) == "object") {                                                     // 1414
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;                                       // 1415
                }                                                                                                      // 1416
                else {                                                                                                 // 1417
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;                                          // 1418
                }                                                                                                      // 1419
            }                                                                                                          // 1420
                                                                                                                       // 1421
            // init axes                                                                                               // 1422
            $.each(axes, function (_, axis) {                                                                          // 1423
                axis.show = axis.options.show;                                                                         // 1424
                if (axis.show == null)                                                                                 // 1425
                    axis.show = axis.used; // by default an axis is visible if it's got data                           // 1426
                                                                                                                       // 1427
                axis.reserveSpace = axis.show || axis.options.reserveSpace;                                            // 1428
                                                                                                                       // 1429
                setRange(axis);                                                                                        // 1430
            });                                                                                                        // 1431
                                                                                                                       // 1432
            if (showGrid) {                                                                                            // 1433
                                                                                                                       // 1434
                var allocatedAxes = $.grep(axes, function (axis) { return axis.reserveSpace; });                       // 1435
                                                                                                                       // 1436
                $.each(allocatedAxes, function (_, axis) {                                                             // 1437
                    // make the ticks                                                                                  // 1438
                    setupTickGeneration(axis);                                                                         // 1439
                    setTicks(axis);                                                                                    // 1440
                    snapRangeToTicks(axis, axis.ticks);                                                                // 1441
                    // find labelWidth/Height for axis                                                                 // 1442
                    measureTickLabels(axis);                                                                           // 1443
                });                                                                                                    // 1444
                                                                                                                       // 1445
                // with all dimensions calculated, we can compute the                                                  // 1446
                // axis bounding boxes, start from the outside                                                         // 1447
                // (reverse order)                                                                                     // 1448
                for (i = allocatedAxes.length - 1; i >= 0; --i)                                                        // 1449
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);                                                       // 1450
                                                                                                                       // 1451
                // make sure we've got enough space for things that                                                    // 1452
                // might stick out                                                                                     // 1453
                adjustLayoutForThingsStickingOut();                                                                    // 1454
                                                                                                                       // 1455
                $.each(allocatedAxes, function (_, axis) {                                                             // 1456
                    allocateAxisBoxSecondPhase(axis);                                                                  // 1457
                });                                                                                                    // 1458
            }                                                                                                          // 1459
                                                                                                                       // 1460
            plotWidth = surface.width - plotOffset.left - plotOffset.right;                                            // 1461
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;                                          // 1462
                                                                                                                       // 1463
            // now we got the proper plot dimensions, we can compute the scaling                                       // 1464
            $.each(axes, function (_, axis) {                                                                          // 1465
                setTransformationHelpers(axis);                                                                        // 1466
            });                                                                                                        // 1467
                                                                                                                       // 1468
            if (showGrid) {                                                                                            // 1469
                drawAxisLabels();                                                                                      // 1470
            }                                                                                                          // 1471
                                                                                                                       // 1472
            insertLegend();                                                                                            // 1473
        }                                                                                                              // 1474
                                                                                                                       // 1475
        function setRange(axis) {                                                                                      // 1476
            var opts = axis.options,                                                                                   // 1477
                min = +(opts.min != null ? opts.min : axis.datamin),                                                   // 1478
                max = +(opts.max != null ? opts.max : axis.datamax),                                                   // 1479
                delta = max - min;                                                                                     // 1480
                                                                                                                       // 1481
            if (delta == 0.0) {                                                                                        // 1482
                // degenerate case                                                                                     // 1483
                var widen = max == 0 ? 1 : 0.01;                                                                       // 1484
                                                                                                                       // 1485
                if (opts.min == null)                                                                                  // 1486
                    min -= widen;                                                                                      // 1487
                // always widen max if we couldn't widen min to ensure we                                              // 1488
                // don't fall into min == max which doesn't work                                                       // 1489
                if (opts.max == null || opts.min != null)                                                              // 1490
                    max += widen;                                                                                      // 1491
            }                                                                                                          // 1492
            else {                                                                                                     // 1493
                // consider autoscaling                                                                                // 1494
                var margin = opts.autoscaleMargin;                                                                     // 1495
                if (margin != null) {                                                                                  // 1496
                    if (opts.min == null) {                                                                            // 1497
                        min -= delta * margin;                                                                         // 1498
                        // make sure we don't go below zero if all values                                              // 1499
                        // are positive                                                                                // 1500
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)                                      // 1501
                            min = 0;                                                                                   // 1502
                    }                                                                                                  // 1503
                    if (opts.max == null) {                                                                            // 1504
                        max += delta * margin;                                                                         // 1505
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)                                      // 1506
                            max = 0;                                                                                   // 1507
                    }                                                                                                  // 1508
                }                                                                                                      // 1509
            }                                                                                                          // 1510
            axis.min = min;                                                                                            // 1511
            axis.max = max;                                                                                            // 1512
        }                                                                                                              // 1513
                                                                                                                       // 1514
        function setupTickGeneration(axis) {                                                                           // 1515
            var opts = axis.options;                                                                                   // 1516
                                                                                                                       // 1517
            // estimate number of ticks                                                                                // 1518
            var noTicks;                                                                                               // 1519
            if (typeof opts.ticks == "number" && opts.ticks > 0)                                                       // 1520
                noTicks = opts.ticks;                                                                                  // 1521
            else                                                                                                       // 1522
                // heuristic based on the model a*sqrt(x) fitted to                                                    // 1523
                // some data points that seemed reasonable                                                             // 1524
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);                     // 1525
                                                                                                                       // 1526
            axis.delta = (axis.max - axis.min) / noTicks;                                                              // 1527
                                                                                                                       // 1528
            // Time mode was moved to a plug-in in 0.8, but since so many people use this                              // 1529
            // we'll add an especially friendly make sure they remembered to include it.                               // 1530
                                                                                                                       // 1531
            if (opts.mode == "time" && !axis.tickGenerator) {                                                          // 1532
                throw new Error("Time mode requires the flot.time plugin.");                                           // 1533
            }                                                                                                          // 1534
                                                                                                                       // 1535
            // Flot supports base-10 axes; any other mode else is handled by a plug-in,                                // 1536
            // like flot.time.js.                                                                                      // 1537
                                                                                                                       // 1538
            if (!axis.tickGenerator) {                                                                                 // 1539
                                                                                                                       // 1540
                axis.tickGenerator = function (axis) {                                                                 // 1541
                    var maxDec = opts.tickDecimals,                                                                    // 1542
                        dec = -Math.floor(Math.log(axis.delta) / Math.LN10);                                           // 1543
                                                                                                                       // 1544
                    if (maxDec != null && dec > maxDec)                                                                // 1545
                        dec = maxDec;                                                                                  // 1546
                                                                                                                       // 1547
                    var magn = Math.pow(10, -dec),                                                                     // 1548
                        norm = axis.delta / magn, // norm is between 1.0 and 10.0                                      // 1549
                        size,                                                                                          // 1550
                                                                                                                       // 1551
                        ticks = [],                                                                                    // 1552
                        start,                                                                                         // 1553
                        i = 0,                                                                                         // 1554
                        v = Number.NaN,                                                                                // 1555
                        prev;                                                                                          // 1556
                                                                                                                       // 1557
                    if (norm < 1.5)                                                                                    // 1558
                        size = 1;                                                                                      // 1559
                    else if (norm < 3) {                                                                               // 1560
                        size = 2;                                                                                      // 1561
                        // special case for 2.5, requires an extra decimal                                             // 1562
                        if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {                                    // 1563
                            size = 2.5;                                                                                // 1564
                            ++dec;                                                                                     // 1565
                        }                                                                                              // 1566
                    }                                                                                                  // 1567
                    else if (norm < 7.5)                                                                               // 1568
                        size = 5;                                                                                      // 1569
                    else size = 10;                                                                                    // 1570
                                                                                                                       // 1571
                    size *= magn;                                                                                      // 1572
                                                                                                                       // 1573
                    if (opts.minTickSize != null && size < opts.minTickSize)                                           // 1574
                        size = opts.minTickSize;                                                                       // 1575
                                                                                                                       // 1576
                    axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);                                    // 1577
                    axis.tickSize = opts.tickSize || size;                                                             // 1578
                                                                                                                       // 1579
                    start = floorInBase(axis.min, axis.tickSize);                                                      // 1580
                                                                                                                       // 1581
                    do {                                                                                               // 1582
                        prev = v;                                                                                      // 1583
                        v = start + i * axis.tickSize;                                                                 // 1584
                        ticks.push(v);                                                                                 // 1585
                        ++i;                                                                                           // 1586
                    } while (v < axis.max && v != prev);                                                               // 1587
                    return ticks;                                                                                      // 1588
                };                                                                                                     // 1589
                                                                                                                       // 1590
				axis.tickFormatter = function (value, axis) {                                                                      // 1591
                                                                                                                       // 1592
					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;                                             // 1593
					var formatted = "" + Math.round(value * factor) / factor;                                                         // 1594
                                                                                                                       // 1595
					// If tickDecimals was specified, ensure that we have exactly that                                                // 1596
					// much precision; otherwise default to the value's own precision.                                                // 1597
                                                                                                                       // 1598
					if (axis.tickDecimals != null) {                                                                                  // 1599
						var decimal = formatted.indexOf(".");                                                                            // 1600
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;                                              // 1601
						if (precision < axis.tickDecimals) {                                                                             // 1602
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);      // 1603
						}                                                                                                                // 1604
					}                                                                                                                 // 1605
                                                                                                                       // 1606
                    return formatted;                                                                                  // 1607
                };                                                                                                     // 1608
            }                                                                                                          // 1609
                                                                                                                       // 1610
            if ($.isFunction(opts.tickFormatter))                                                                      // 1611
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };                  // 1612
                                                                                                                       // 1613
            if (opts.alignTicksWithAxis != null) {                                                                     // 1614
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];                  // 1615
                if (otherAxis && otherAxis.used && otherAxis != axis) {                                                // 1616
                    // consider snapping min/max to outermost nice ticks                                               // 1617
                    var niceTicks = axis.tickGenerator(axis);                                                          // 1618
                    if (niceTicks.length > 0) {                                                                        // 1619
                        if (opts.min == null)                                                                          // 1620
                            axis.min = Math.min(axis.min, niceTicks[0]);                                               // 1621
                        if (opts.max == null && niceTicks.length > 1)                                                  // 1622
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);                            // 1623
                    }                                                                                                  // 1624
                                                                                                                       // 1625
                    axis.tickGenerator = function (axis) {                                                             // 1626
                        // copy ticks, scaled to this axis                                                             // 1627
                        var ticks = [], v, i;                                                                          // 1628
                        for (i = 0; i < otherAxis.ticks.length; ++i) {                                                 // 1629
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);              // 1630
                            v = axis.min + v * (axis.max - axis.min);                                                  // 1631
                            ticks.push(v);                                                                             // 1632
                        }                                                                                              // 1633
                        return ticks;                                                                                  // 1634
                    };                                                                                                 // 1635
                                                                                                                       // 1636
                    // we might need an extra decimal since forced                                                     // 1637
                    // ticks don't necessarily fit naturally                                                           // 1638
                    if (!axis.mode && opts.tickDecimals == null) {                                                     // 1639
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),                 // 1640
                            ts = axis.tickGenerator(axis);                                                             // 1641
                                                                                                                       // 1642
                        // only proceed if the tick interval rounded                                                   // 1643
                        // with an extra decimal doesn't give us a                                                     // 1644
                        // zero at end                                                                                 // 1645
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))                      // 1646
                            axis.tickDecimals = extraDec;                                                              // 1647
                    }                                                                                                  // 1648
                }                                                                                                      // 1649
            }                                                                                                          // 1650
        }                                                                                                              // 1651
                                                                                                                       // 1652
        function setTicks(axis) {                                                                                      // 1653
            var oticks = axis.options.ticks, ticks = [];                                                               // 1654
            if (oticks == null || (typeof oticks == "number" && oticks > 0))                                           // 1655
                ticks = axis.tickGenerator(axis);                                                                      // 1656
            else if (oticks) {                                                                                         // 1657
                if ($.isFunction(oticks))                                                                              // 1658
                    // generate the ticks                                                                              // 1659
                    ticks = oticks(axis);                                                                              // 1660
                else                                                                                                   // 1661
                    ticks = oticks;                                                                                    // 1662
            }                                                                                                          // 1663
                                                                                                                       // 1664
            // clean up/labelify the supplied ticks, copy them over                                                    // 1665
            var i, v;                                                                                                  // 1666
            axis.ticks = [];                                                                                           // 1667
            for (i = 0; i < ticks.length; ++i) {                                                                       // 1668
                var label = null;                                                                                      // 1669
                var t = ticks[i];                                                                                      // 1670
                if (typeof t == "object") {                                                                            // 1671
                    v = +t[0];                                                                                         // 1672
                    if (t.length > 1)                                                                                  // 1673
                        label = t[1];                                                                                  // 1674
                }                                                                                                      // 1675
                else                                                                                                   // 1676
                    v = +t;                                                                                            // 1677
                if (label == null)                                                                                     // 1678
                    label = axis.tickFormatter(v, axis);                                                               // 1679
                if (!isNaN(v))                                                                                         // 1680
                    axis.ticks.push({ v: v, label: label });                                                           // 1681
            }                                                                                                          // 1682
        }                                                                                                              // 1683
                                                                                                                       // 1684
        function snapRangeToTicks(axis, ticks) {                                                                       // 1685
            if (axis.options.autoscaleMargin && ticks.length > 0) {                                                    // 1686
                // snap to ticks                                                                                       // 1687
                if (axis.options.min == null)                                                                          // 1688
                    axis.min = Math.min(axis.min, ticks[0].v);                                                         // 1689
                if (axis.options.max == null && ticks.length > 1)                                                      // 1690
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);                                          // 1691
            }                                                                                                          // 1692
        }                                                                                                              // 1693
                                                                                                                       // 1694
        function draw() {                                                                                              // 1695
                                                                                                                       // 1696
            surface.clear();                                                                                           // 1697
                                                                                                                       // 1698
            executeHooks(hooks.drawBackground, [ctx]);                                                                 // 1699
                                                                                                                       // 1700
            var grid = options.grid;                                                                                   // 1701
                                                                                                                       // 1702
            // draw background, if any                                                                                 // 1703
            if (grid.show && grid.backgroundColor)                                                                     // 1704
                drawBackground();                                                                                      // 1705
                                                                                                                       // 1706
            if (grid.show && !grid.aboveData) {                                                                        // 1707
                drawGrid();                                                                                            // 1708
            }                                                                                                          // 1709
                                                                                                                       // 1710
            for (var i = 0; i < series.length; ++i) {                                                                  // 1711
                executeHooks(hooks.drawSeries, [ctx, series[i]]);                                                      // 1712
                drawSeries(series[i]);                                                                                 // 1713
            }                                                                                                          // 1714
                                                                                                                       // 1715
            executeHooks(hooks.draw, [ctx]);                                                                           // 1716
                                                                                                                       // 1717
            if (grid.show && grid.aboveData) {                                                                         // 1718
                drawGrid();                                                                                            // 1719
            }                                                                                                          // 1720
                                                                                                                       // 1721
            surface.render();                                                                                          // 1722
        }                                                                                                              // 1723
                                                                                                                       // 1724
        function extractRange(ranges, coord) {                                                                         // 1725
            var axis, from, to, key, axes = allAxes();                                                                 // 1726
                                                                                                                       // 1727
            for (var i = 0; i < axes.length; ++i) {                                                                    // 1728
                axis = axes[i];                                                                                        // 1729
                if (axis.direction == coord) {                                                                         // 1730
                    key = coord + axis.n + "axis";                                                                     // 1731
                    if (!ranges[key] && axis.n == 1)                                                                   // 1732
                        key = coord + "axis"; // support x1axis as xaxis                                               // 1733
                    if (ranges[key]) {                                                                                 // 1734
                        from = ranges[key].from;                                                                       // 1735
                        to = ranges[key].to;                                                                           // 1736
                        break;                                                                                         // 1737
                    }                                                                                                  // 1738
                }                                                                                                      // 1739
            }                                                                                                          // 1740
                                                                                                                       // 1741
            // backwards-compat stuff - to be removed in future                                                        // 1742
            if (!ranges[key]) {                                                                                        // 1743
                axis = coord == "x" ? xaxes[0] : yaxes[0];                                                             // 1744
                from = ranges[coord + "1"];                                                                            // 1745
                to = ranges[coord + "2"];                                                                              // 1746
            }                                                                                                          // 1747
                                                                                                                       // 1748
            // auto-reverse as an added bonus                                                                          // 1749
            if (from != null && to != null && from > to) {                                                             // 1750
                var tmp = from;                                                                                        // 1751
                from = to;                                                                                             // 1752
                to = tmp;                                                                                              // 1753
            }                                                                                                          // 1754
                                                                                                                       // 1755
            return { from: from, to: to, axis: axis };                                                                 // 1756
        }                                                                                                              // 1757
                                                                                                                       // 1758
        function drawBackground() {                                                                                    // 1759
            ctx.save();                                                                                                // 1760
            ctx.translate(plotOffset.left, plotOffset.top);                                                            // 1761
                                                                                                                       // 1762
            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)"); // 1763
            ctx.fillRect(0, 0, plotWidth, plotHeight);                                                                 // 1764
            ctx.restore();                                                                                             // 1765
        }                                                                                                              // 1766
                                                                                                                       // 1767
        function drawGrid() {                                                                                          // 1768
            var i, axes, bw, bc;                                                                                       // 1769
                                                                                                                       // 1770
            ctx.save();                                                                                                // 1771
            ctx.translate(plotOffset.left, plotOffset.top);                                                            // 1772
                                                                                                                       // 1773
            // draw markings                                                                                           // 1774
            var markings = options.grid.markings;                                                                      // 1775
            if (markings) {                                                                                            // 1776
                if ($.isFunction(markings)) {                                                                          // 1777
                    axes = plot.getAxes();                                                                             // 1778
                    // xmin etc. is backwards compatibility, to be                                                     // 1779
                    // removed in the future                                                                           // 1780
                    axes.xmin = axes.xaxis.min;                                                                        // 1781
                    axes.xmax = axes.xaxis.max;                                                                        // 1782
                    axes.ymin = axes.yaxis.min;                                                                        // 1783
                    axes.ymax = axes.yaxis.max;                                                                        // 1784
                                                                                                                       // 1785
                    markings = markings(axes);                                                                         // 1786
                }                                                                                                      // 1787
                                                                                                                       // 1788
                for (i = 0; i < markings.length; ++i) {                                                                // 1789
                    var m = markings[i],                                                                               // 1790
                        xrange = extractRange(m, "x"),                                                                 // 1791
                        yrange = extractRange(m, "y");                                                                 // 1792
                                                                                                                       // 1793
                    // fill in missing                                                                                 // 1794
                    if (xrange.from == null)                                                                           // 1795
                        xrange.from = xrange.axis.min;                                                                 // 1796
                    if (xrange.to == null)                                                                             // 1797
                        xrange.to = xrange.axis.max;                                                                   // 1798
                    if (yrange.from == null)                                                                           // 1799
                        yrange.from = yrange.axis.min;                                                                 // 1800
                    if (yrange.to == null)                                                                             // 1801
                        yrange.to = yrange.axis.max;                                                                   // 1802
                                                                                                                       // 1803
                    // clip                                                                                            // 1804
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||                                // 1805
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)                                  // 1806
                        continue;                                                                                      // 1807
                                                                                                                       // 1808
                    xrange.from = Math.max(xrange.from, xrange.axis.min);                                              // 1809
                    xrange.to = Math.min(xrange.to, xrange.axis.max);                                                  // 1810
                    yrange.from = Math.max(yrange.from, yrange.axis.min);                                              // 1811
                    yrange.to = Math.min(yrange.to, yrange.axis.max);                                                  // 1812
                                                                                                                       // 1813
                    if (xrange.from == xrange.to && yrange.from == yrange.to)                                          // 1814
                        continue;                                                                                      // 1815
                                                                                                                       // 1816
                    // then draw                                                                                       // 1817
                    xrange.from = xrange.axis.p2c(xrange.from);                                                        // 1818
                    xrange.to = xrange.axis.p2c(xrange.to);                                                            // 1819
                    yrange.from = yrange.axis.p2c(yrange.from);                                                        // 1820
                    yrange.to = yrange.axis.p2c(yrange.to);                                                            // 1821
                                                                                                                       // 1822
                    if (xrange.from == xrange.to || yrange.from == yrange.to) {                                        // 1823
                        // draw line                                                                                   // 1824
                        ctx.beginPath();                                                                               // 1825
                        ctx.strokeStyle = m.color || options.grid.markingsColor;                                       // 1826
                        ctx.lineWidth = m.lineWidth || options.grid.markingsLineWidth;                                 // 1827
                        ctx.moveTo(xrange.from, yrange.from);                                                          // 1828
                        ctx.lineTo(xrange.to, yrange.to);                                                              // 1829
                        ctx.stroke();                                                                                  // 1830
                    }                                                                                                  // 1831
                    else {                                                                                             // 1832
                        // fill area                                                                                   // 1833
                        ctx.fillStyle = m.color || options.grid.markingsColor;                                         // 1834
                        ctx.fillRect(xrange.from, yrange.to,                                                           // 1835
                                     xrange.to - xrange.from,                                                          // 1836
                                     yrange.from - yrange.to);                                                         // 1837
                    }                                                                                                  // 1838
                }                                                                                                      // 1839
            }                                                                                                          // 1840
                                                                                                                       // 1841
            // draw the ticks                                                                                          // 1842
            axes = allAxes();                                                                                          // 1843
            bw = options.grid.borderWidth;                                                                             // 1844
                                                                                                                       // 1845
            for (var j = 0; j < axes.length; ++j) {                                                                    // 1846
                var axis = axes[j], box = axis.box,                                                                    // 1847
                    t = axis.tickLength, x, y, xoff, yoff;                                                             // 1848
                if (!axis.show || axis.ticks.length == 0)                                                              // 1849
                    continue;                                                                                          // 1850
                                                                                                                       // 1851
                ctx.lineWidth = 1;                                                                                     // 1852
                                                                                                                       // 1853
                // find the edges                                                                                      // 1854
                if (axis.direction == "x") {                                                                           // 1855
                    x = 0;                                                                                             // 1856
                    if (t == "full")                                                                                   // 1857
                        y = (axis.position == "top" ? 0 : plotHeight);                                                 // 1858
                    else                                                                                               // 1859
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);                      // 1860
                }                                                                                                      // 1861
                else {                                                                                                 // 1862
                    y = 0;                                                                                             // 1863
                    if (t == "full")                                                                                   // 1864
                        x = (axis.position == "left" ? 0 : plotWidth);                                                 // 1865
                    else                                                                                               // 1866
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);                    // 1867
                }                                                                                                      // 1868
                                                                                                                       // 1869
                // draw tick bar                                                                                       // 1870
                if (!axis.innermost) {                                                                                 // 1871
                    ctx.strokeStyle = axis.options.color;                                                              // 1872
                    ctx.beginPath();                                                                                   // 1873
                    xoff = yoff = 0;                                                                                   // 1874
                    if (axis.direction == "x")                                                                         // 1875
                        xoff = plotWidth + 1;                                                                          // 1876
                    else                                                                                               // 1877
                        yoff = plotHeight + 1;                                                                         // 1878
                                                                                                                       // 1879
                    if (ctx.lineWidth == 1) {                                                                          // 1880
                        if (axis.direction == "x") {                                                                   // 1881
                            y = Math.floor(y) + 0.5;                                                                   // 1882
                        } else {                                                                                       // 1883
                            x = Math.floor(x) + 0.5;                                                                   // 1884
                        }                                                                                              // 1885
                    }                                                                                                  // 1886
                                                                                                                       // 1887
                    ctx.moveTo(x, y);                                                                                  // 1888
                    ctx.lineTo(x + xoff, y + yoff);                                                                    // 1889
                    ctx.stroke();                                                                                      // 1890
                }                                                                                                      // 1891
                                                                                                                       // 1892
                // draw ticks                                                                                          // 1893
                                                                                                                       // 1894
                ctx.strokeStyle = axis.options.tickColor;                                                              // 1895
                                                                                                                       // 1896
                ctx.beginPath();                                                                                       // 1897
                for (i = 0; i < axis.ticks.length; ++i) {                                                              // 1898
                    var v = axis.ticks[i].v;                                                                           // 1899
                                                                                                                       // 1900
                    xoff = yoff = 0;                                                                                   // 1901
                                                                                                                       // 1902
                    if (isNaN(v) || v < axis.min || v > axis.max                                                       // 1903
                        // skip those lying on the axes if we got a border                                             // 1904
                        || (t == "full"                                                                                // 1905
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)                            // 1906
                            && (v == axis.min || v == axis.max)))                                                      // 1907
                        continue;                                                                                      // 1908
                                                                                                                       // 1909
                    if (axis.direction == "x") {                                                                       // 1910
                        x = axis.p2c(v);                                                                               // 1911
                        yoff = t == "full" ? -plotHeight : t;                                                          // 1912
                                                                                                                       // 1913
                        if (axis.position == "top")                                                                    // 1914
                            yoff = -yoff;                                                                              // 1915
                    }                                                                                                  // 1916
                    else {                                                                                             // 1917
                        y = axis.p2c(v);                                                                               // 1918
                        xoff = t == "full" ? -plotWidth : t;                                                           // 1919
                                                                                                                       // 1920
                        if (axis.position == "left")                                                                   // 1921
                            xoff = -xoff;                                                                              // 1922
                    }                                                                                                  // 1923
                                                                                                                       // 1924
                    if (ctx.lineWidth == 1) {                                                                          // 1925
                        if (axis.direction == "x")                                                                     // 1926
                            x = Math.floor(x) + 0.5;                                                                   // 1927
                        else                                                                                           // 1928
                            y = Math.floor(y) + 0.5;                                                                   // 1929
                    }                                                                                                  // 1930
                                                                                                                       // 1931
                    ctx.moveTo(x, y);                                                                                  // 1932
                    ctx.lineTo(x + xoff, y + yoff);                                                                    // 1933
                }                                                                                                      // 1934
                                                                                                                       // 1935
                ctx.stroke();                                                                                          // 1936
            }                                                                                                          // 1937
                                                                                                                       // 1938
                                                                                                                       // 1939
            // draw border                                                                                             // 1940
            if (bw) {                                                                                                  // 1941
                // If either borderWidth or borderColor is an object, then draw the border                             // 1942
                // line by line instead of as one rectangle                                                            // 1943
                bc = options.grid.borderColor;                                                                         // 1944
                if(typeof bw == "object" || typeof bc == "object") {                                                   // 1945
                    if (typeof bw !== "object") {                                                                      // 1946
                        bw = {top: bw, right: bw, bottom: bw, left: bw};                                               // 1947
                    }                                                                                                  // 1948
                    if (typeof bc !== "object") {                                                                      // 1949
                        bc = {top: bc, right: bc, bottom: bc, left: bc};                                               // 1950
                    }                                                                                                  // 1951
                                                                                                                       // 1952
                    if (bw.top > 0) {                                                                                  // 1953
                        ctx.strokeStyle = bc.top;                                                                      // 1954
                        ctx.lineWidth = bw.top;                                                                        // 1955
                        ctx.beginPath();                                                                               // 1956
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);                                                         // 1957
                        ctx.lineTo(plotWidth, 0 - bw.top/2);                                                           // 1958
                        ctx.stroke();                                                                                  // 1959
                    }                                                                                                  // 1960
                                                                                                                       // 1961
                    if (bw.right > 0) {                                                                                // 1962
                        ctx.strokeStyle = bc.right;                                                                    // 1963
                        ctx.lineWidth = bw.right;                                                                      // 1964
                        ctx.beginPath();                                                                               // 1965
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);                                              // 1966
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);                                              // 1967
                        ctx.stroke();                                                                                  // 1968
                    }                                                                                                  // 1969
                                                                                                                       // 1970
                    if (bw.bottom > 0) {                                                                               // 1971
                        ctx.strokeStyle = bc.bottom;                                                                   // 1972
                        ctx.lineWidth = bw.bottom;                                                                     // 1973
                        ctx.beginPath();                                                                               // 1974
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);                                  // 1975
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);                                                     // 1976
                        ctx.stroke();                                                                                  // 1977
                    }                                                                                                  // 1978
                                                                                                                       // 1979
                    if (bw.left > 0) {                                                                                 // 1980
                        ctx.strokeStyle = bc.left;                                                                     // 1981
                        ctx.lineWidth = bw.left;                                                                       // 1982
                        ctx.beginPath();                                                                               // 1983
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);                                             // 1984
                        ctx.lineTo(0- bw.left/2, 0);                                                                   // 1985
                        ctx.stroke();                                                                                  // 1986
                    }                                                                                                  // 1987
                }                                                                                                      // 1988
                else {                                                                                                 // 1989
                    ctx.lineWidth = bw;                                                                                // 1990
                    ctx.strokeStyle = options.grid.borderColor;                                                        // 1991
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);                                     // 1992
                }                                                                                                      // 1993
            }                                                                                                          // 1994
                                                                                                                       // 1995
            ctx.restore();                                                                                             // 1996
        }                                                                                                              // 1997
                                                                                                                       // 1998
        function drawAxisLabels() {                                                                                    // 1999
                                                                                                                       // 2000
            $.each(allAxes(), function (_, axis) {                                                                     // 2001
                if (!axis.show || axis.ticks.length == 0)                                                              // 2002
                    return;                                                                                            // 2003
                                                                                                                       // 2004
                var box = axis.box,                                                                                    // 2005
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",                        // 2006
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",                                           // 2008
                    tick, x, y, halign, valign;                                                                        // 2009
                                                                                                                       // 2010
                surface.removeText(layer);                                                                             // 2011
                                                                                                                       // 2012
                for (var i = 0; i < axis.ticks.length; ++i) {                                                          // 2013
                                                                                                                       // 2014
                    tick = axis.ticks[i];                                                                              // 2015
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)                                         // 2016
                        continue;                                                                                      // 2017
                                                                                                                       // 2018
                    if (axis.direction == "x") {                                                                       // 2019
                        halign = "center";                                                                             // 2020
                        x = plotOffset.left + axis.p2c(tick.v);                                                        // 2021
                        if (axis.position == "bottom") {                                                               // 2022
                            y = box.top + box.padding;                                                                 // 2023
                        } else {                                                                                       // 2024
                            y = box.top + box.height - box.padding;                                                    // 2025
                            valign = "bottom";                                                                         // 2026
                        }                                                                                              // 2027
                    } else {                                                                                           // 2028
                        valign = "middle";                                                                             // 2029
                        y = plotOffset.top + axis.p2c(tick.v);                                                         // 2030
                        if (axis.position == "left") {                                                                 // 2031
                            x = box.left + box.width - box.padding;                                                    // 2032
                            halign = "right";                                                                          // 2033
                        } else {                                                                                       // 2034
                            x = box.left + box.padding;                                                                // 2035
                        }                                                                                              // 2036
                    }                                                                                                  // 2037
                                                                                                                       // 2038
                    surface.addText(layer, x, y, tick.label, font, null, halign, valign);                              // 2039
                }                                                                                                      // 2040
            });                                                                                                        // 2041
        }                                                                                                              // 2042
                                                                                                                       // 2043
        function drawSeries(series) {                                                                                  // 2044
            if (series.lines.show)                                                                                     // 2045
                drawSeriesLines(series);                                                                               // 2046
            if (series.bars.show)                                                                                      // 2047
                drawSeriesBars(series);                                                                                // 2048
            if (series.points.show)                                                                                    // 2049
                drawSeriesPoints(series);                                                                              // 2050
        }                                                                                                              // 2051
                                                                                                                       // 2052
        function drawSeriesLines(series) {                                                                             // 2053
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {                                            // 2054
                var points = datapoints.points,                                                                        // 2055
                    ps = datapoints.pointsize,                                                                         // 2056
                    prevx = null, prevy = null;                                                                        // 2057
                                                                                                                       // 2058
                ctx.beginPath();                                                                                       // 2059
                for (var i = ps; i < points.length; i += ps) {                                                         // 2060
                    var x1 = points[i - ps], y1 = points[i - ps + 1],                                                  // 2061
                        x2 = points[i], y2 = points[i + 1];                                                            // 2062
                                                                                                                       // 2063
                    if (x1 == null || x2 == null)                                                                      // 2064
                        continue;                                                                                      // 2065
                                                                                                                       // 2066
                    // clip with ymin                                                                                  // 2067
                    if (y1 <= y2 && y1 < axisy.min) {                                                                  // 2068
                        if (y2 < axisy.min)                                                                            // 2069
                            continue;   // line segment is outside                                                     // 2070
                        // compute new intersection point                                                              // 2071
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;                                            // 2072
                        y1 = axisy.min;                                                                                // 2073
                    }                                                                                                  // 2074
                    else if (y2 <= y1 && y2 < axisy.min) {                                                             // 2075
                        if (y1 < axisy.min)                                                                            // 2076
                            continue;                                                                                  // 2077
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;                                            // 2078
                        y2 = axisy.min;                                                                                // 2079
                    }                                                                                                  // 2080
                                                                                                                       // 2081
                    // clip with ymax                                                                                  // 2082
                    if (y1 >= y2 && y1 > axisy.max) {                                                                  // 2083
                        if (y2 > axisy.max)                                                                            // 2084
                            continue;                                                                                  // 2085
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;                                            // 2086
                        y1 = axisy.max;                                                                                // 2087
                    }                                                                                                  // 2088
                    else if (y2 >= y1 && y2 > axisy.max) {                                                             // 2089
                        if (y1 > axisy.max)                                                                            // 2090
                            continue;                                                                                  // 2091
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;                                            // 2092
                        y2 = axisy.max;                                                                                // 2093
                    }                                                                                                  // 2094
                                                                                                                       // 2095
                    // clip with xmin                                                                                  // 2096
                    if (x1 <= x2 && x1 < axisx.min) {                                                                  // 2097
                        if (x2 < axisx.min)                                                                            // 2098
                            continue;                                                                                  // 2099
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;                                            // 2100
                        x1 = axisx.min;                                                                                // 2101
                    }                                                                                                  // 2102
                    else if (x2 <= x1 && x2 < axisx.min) {                                                             // 2103
                        if (x1 < axisx.min)                                                                            // 2104
                            continue;                                                                                  // 2105
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;                                            // 2106
                        x2 = axisx.min;                                                                                // 2107
                    }                                                                                                  // 2108
                                                                                                                       // 2109
                    // clip with xmax                                                                                  // 2110
                    if (x1 >= x2 && x1 > axisx.max) {                                                                  // 2111
                        if (x2 > axisx.max)                                                                            // 2112
                            continue;                                                                                  // 2113
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;                                            // 2114
                        x1 = axisx.max;                                                                                // 2115
                    }                                                                                                  // 2116
                    else if (x2 >= x1 && x2 > axisx.max) {                                                             // 2117
                        if (x1 > axisx.max)                                                                            // 2118
                            continue;                                                                                  // 2119
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;                                            // 2120
                        x2 = axisx.max;                                                                                // 2121
                    }                                                                                                  // 2122
                                                                                                                       // 2123
                    if (x1 != prevx || y1 != prevy)                                                                    // 2124
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);                                  // 2125
                                                                                                                       // 2126
                    prevx = x2;                                                                                        // 2127
                    prevy = y2;                                                                                        // 2128
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);                                      // 2129
                }                                                                                                      // 2130
                ctx.stroke();                                                                                          // 2131
            }                                                                                                          // 2132
                                                                                                                       // 2133
            function plotLineArea(datapoints, axisx, axisy) {                                                          // 2134
                var points = datapoints.points,                                                                        // 2135
                    ps = datapoints.pointsize,                                                                         // 2136
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),                                              // 2137
                    i = 0, top, areaOpen = false,                                                                      // 2138
                    ypos = 1, segmentStart = 0, segmentEnd = 0;                                                        // 2139
                                                                                                                       // 2140
                // we process each segment in two turns, first forward                                                 // 2141
                // direction to sketch out top, then once we hit the                                                   // 2142
                // end we go backwards to sketch the bottom                                                            // 2143
                while (true) {                                                                                         // 2144
                    if (ps > 0 && i > points.length + ps)                                                              // 2145
                        break;                                                                                         // 2146
                                                                                                                       // 2147
                    i += ps; // ps is negative if going backwards                                                      // 2148
                                                                                                                       // 2149
                    var x1 = points[i - ps],                                                                           // 2150
                        y1 = points[i - ps + ypos],                                                                    // 2151
                        x2 = points[i], y2 = points[i + ypos];                                                         // 2152
                                                                                                                       // 2153
                    if (areaOpen) {                                                                                    // 2154
                        if (ps > 0 && x1 != null && x2 == null) {                                                      // 2155
                            // at turning point                                                                        // 2156
                            segmentEnd = i;                                                                            // 2157
                            ps = -ps;                                                                                  // 2158
                            ypos = 2;                                                                                  // 2159
                            continue;                                                                                  // 2160
                        }                                                                                              // 2161
                                                                                                                       // 2162
                        if (ps < 0 && i == segmentStart + ps) {                                                        // 2163
                            // done with the reverse sweep                                                             // 2164
                            ctx.fill();                                                                                // 2165
                            areaOpen = false;                                                                          // 2166
                            ps = -ps;                                                                                  // 2167
                            ypos = 1;                                                                                  // 2168
                            i = segmentStart = segmentEnd + ps;                                                        // 2169
                            continue;                                                                                  // 2170
                        }                                                                                              // 2171
                    }                                                                                                  // 2172
                                                                                                                       // 2173
                    if (x1 == null || x2 == null)                                                                      // 2174
                        continue;                                                                                      // 2175
                                                                                                                       // 2176
                    // clip x values                                                                                   // 2177
                                                                                                                       // 2178
                    // clip with xmin                                                                                  // 2179
                    if (x1 <= x2 && x1 < axisx.min) {                                                                  // 2180
                        if (x2 < axisx.min)                                                                            // 2181
                            continue;                                                                                  // 2182
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;                                            // 2183
                        x1 = axisx.min;                                                                                // 2184
                    }                                                                                                  // 2185
                    else if (x2 <= x1 && x2 < axisx.min) {                                                             // 2186
                        if (x1 < axisx.min)                                                                            // 2187
                            continue;                                                                                  // 2188
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;                                            // 2189
                        x2 = axisx.min;                                                                                // 2190
                    }                                                                                                  // 2191
                                                                                                                       // 2192
                    // clip with xmax                                                                                  // 2193
                    if (x1 >= x2 && x1 > axisx.max) {                                                                  // 2194
                        if (x2 > axisx.max)                                                                            // 2195
                            continue;                                                                                  // 2196
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;                                            // 2197
                        x1 = axisx.max;                                                                                // 2198
                    }                                                                                                  // 2199
                    else if (x2 >= x1 && x2 > axisx.max) {                                                             // 2200
                        if (x1 > axisx.max)                                                                            // 2201
                            continue;                                                                                  // 2202
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;                                            // 2203
                        x2 = axisx.max;                                                                                // 2204
                    }                                                                                                  // 2205
                                                                                                                       // 2206
                    if (!areaOpen) {                                                                                   // 2207
                        // open area                                                                                   // 2208
                        ctx.beginPath();                                                                               // 2209
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));                                                  // 2210
                        areaOpen = true;                                                                               // 2211
                    }                                                                                                  // 2212
                                                                                                                       // 2213
                    // now first check the case where both is outside                                                  // 2214
                    if (y1 >= axisy.max && y2 >= axisy.max) {                                                          // 2215
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));                                               // 2216
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));                                               // 2217
                        continue;                                                                                      // 2218
                    }                                                                                                  // 2219
                    else if (y1 <= axisy.min && y2 <= axisy.min) {                                                     // 2220
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));                                               // 2221
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));                                               // 2222
                        continue;                                                                                      // 2223
                    }                                                                                                  // 2224
                                                                                                                       // 2225
                    // else it's a bit more complicated, there might                                                   // 2226
                    // be a flat maxed out rectangle first, then a                                                     // 2227
                    // triangular cutout or reverse; to find these                                                     // 2228
                    // keep track of the current x values                                                              // 2229
                    var x1old = x1, x2old = x2;                                                                        // 2230
                                                                                                                       // 2231
                    // clip the y values, without shortcutting, we                                                     // 2232
                    // go through all cases in turn                                                                    // 2233
                                                                                                                       // 2234
                    // clip with ymin                                                                                  // 2235
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {                                               // 2236
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;                                            // 2237
                        y1 = axisy.min;                                                                                // 2238
                    }                                                                                                  // 2239
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {                                          // 2240
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;                                            // 2241
                        y2 = axisy.min;                                                                                // 2242
                    }                                                                                                  // 2243
                                                                                                                       // 2244
                    // clip with ymax                                                                                  // 2245
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {                                               // 2246
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;                                            // 2247
                        y1 = axisy.max;                                                                                // 2248
                    }                                                                                                  // 2249
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {                                          // 2250
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;                                            // 2251
                        y2 = axisy.max;                                                                                // 2252
                    }                                                                                                  // 2253
                                                                                                                       // 2254
                    // if the x value was changed we got a rectangle                                                   // 2255
                    // to fill                                                                                         // 2256
                    if (x1 != x1old) {                                                                                 // 2257
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));                                                   // 2258
                        // it goes to (x1, y1), but we fill that below                                                 // 2259
                    }                                                                                                  // 2260
                                                                                                                       // 2261
                    // fill triangular section, this sometimes result                                                  // 2262
                    // in redundant points if (x1, y1) hasn't changed                                                  // 2263
                    // from previous line to, but we just ignore that                                                  // 2264
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));                                                          // 2265
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));                                                          // 2266
                                                                                                                       // 2267
                    // fill the other rectangle if it's there                                                          // 2268
                    if (x2 != x2old) {                                                                                 // 2269
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));                                                      // 2270
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));                                                   // 2271
                    }                                                                                                  // 2272
                }                                                                                                      // 2273
            }                                                                                                          // 2274
                                                                                                                       // 2275
            ctx.save();                                                                                                // 2276
            ctx.translate(plotOffset.left, plotOffset.top);                                                            // 2277
            ctx.lineJoin = "round";                                                                                    // 2278
                                                                                                                       // 2279
            var lw = series.lines.lineWidth,                                                                           // 2280
                sw = series.shadowSize;                                                                                // 2281
            // FIXME: consider another form of shadow when filling is turned on                                        // 2282
            if (lw > 0 && sw > 0) {                                                                                    // 2283
                // draw shadow as a thick and thin line with transparency                                              // 2284
                ctx.lineWidth = sw;                                                                                    // 2285
                ctx.strokeStyle = "rgba(0,0,0,0.1)";                                                                   // 2286
                // position shadow at angle from the mid of line                                                       // 2287
                var angle = Math.PI/18;                                                                                // 2288
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;                                                                                  // 2290
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }                                                                                                          // 2292
                                                                                                                       // 2293
            ctx.lineWidth = lw;                                                                                        // 2294
            ctx.strokeStyle = series.color;                                                                            // 2295
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);                                   // 2296
            if (fillStyle) {                                                                                           // 2297
                ctx.fillStyle = fillStyle;                                                                             // 2298
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);                                           // 2299
            }                                                                                                          // 2300
                                                                                                                       // 2301
            if (lw > 0)                                                                                                // 2302
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);                                         // 2303
            ctx.restore();                                                                                             // 2304
        }                                                                                                              // 2305
                                                                                                                       // 2306
        function drawSeriesPoints(series) {                                                                            // 2307
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {                 // 2308
                var points = datapoints.points, ps = datapoints.pointsize;                                             // 2309
                                                                                                                       // 2310
                for (var i = 0; i < points.length; i += ps) {                                                          // 2311
                    var x = points[i], y = points[i + 1];                                                              // 2312
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)                 // 2313
                        continue;                                                                                      // 2314
                                                                                                                       // 2315
                    ctx.beginPath();                                                                                   // 2316
                    x = axisx.p2c(x);                                                                                  // 2317
                    y = axisy.p2c(y) + offset;                                                                         // 2318
                    if (symbol == "circle")                                                                            // 2319
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);                               // 2320
                    else                                                                                               // 2321
                        symbol(ctx, x, y, radius, shadow);                                                             // 2322
                    ctx.closePath();                                                                                   // 2323
                                                                                                                       // 2324
                    if (fillStyle) {                                                                                   // 2325
                        ctx.fillStyle = fillStyle;                                                                     // 2326
                        ctx.fill();                                                                                    // 2327
                    }                                                                                                  // 2328
                    ctx.stroke();                                                                                      // 2329
                }                                                                                                      // 2330
            }                                                                                                          // 2331
                                                                                                                       // 2332
            ctx.save();                                                                                                // 2333
            ctx.translate(plotOffset.left, plotOffset.top);                                                            // 2334
                                                                                                                       // 2335
            var lw = series.points.lineWidth,                                                                          // 2336
                sw = series.shadowSize,                                                                                // 2337
                radius = series.points.radius,                                                                         // 2338
                symbol = series.points.symbol;                                                                         // 2339
                                                                                                                       // 2340
            // If the user sets the line width to 0, we change it to a very                                            // 2341
            // small value. A line width of 0 seems to force the default of 1.                                         // 2342
            // Doing the conditional here allows the shadow setting to still be                                        // 2343
            // optional even with a lineWidth of 0.                                                                    // 2344
                                                                                                                       // 2345
            if( lw == 0 )                                                                                              // 2346
                lw = 0.0001;                                                                                           // 2347
                                                                                                                       // 2348
            if (lw > 0 && sw > 0) {                                                                                    // 2349
                // draw shadow in two steps                                                                            // 2350
                var w = sw / 2;                                                                                        // 2351
                ctx.lineWidth = w;                                                                                     // 2352
                ctx.strokeStyle = "rgba(0,0,0,0.1)";                                                                   // 2353
                plotPoints(series.datapoints, radius, null, w + w/2, true,                                             // 2354
                           series.xaxis, series.yaxis, symbol);                                                        // 2355
                                                                                                                       // 2356
                ctx.strokeStyle = "rgba(0,0,0,0.2)";                                                                   // 2357
                plotPoints(series.datapoints, radius, null, w/2, true,                                                 // 2358
                           series.xaxis, series.yaxis, symbol);                                                        // 2359
            }                                                                                                          // 2360
                                                                                                                       // 2361
            ctx.lineWidth = lw;                                                                                        // 2362
            ctx.strokeStyle = series.color;                                                                            // 2363
            plotPoints(series.datapoints, radius,                                                                      // 2364
                       getFillStyle(series.points, series.color), 0, false,                                            // 2365
                       series.xaxis, series.yaxis, symbol);                                                            // 2366
            ctx.restore();                                                                                             // 2367
        }                                                                                                              // 2368
                                                                                                                       // 2369
        function drawBar(x, y, b, barLeft, barRight, offset, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,                                                                              // 2371
                drawLeft, drawRight, drawTop, drawBottom,                                                              // 2372
                tmp;                                                                                                   // 2373
                                                                                                                       // 2374
            // in horizontal mode, we start the bar from the left                                                      // 2375
            // instead of from the bottom so it appears to be                                                          // 2376
            // horizontal rather than vertical                                                                         // 2377
            if (horizontal) {                                                                                          // 2378
                drawBottom = drawRight = drawTop = true;                                                               // 2379
                drawLeft = false;                                                                                      // 2380
                left = b;                                                                                              // 2381
                right = x;                                                                                             // 2382
                top = y + barLeft;                                                                                     // 2383
                bottom = y + barRight;                                                                                 // 2384
                                                                                                                       // 2385
                // account for negative bars                                                                           // 2386
                if (right < left) {                                                                                    // 2387
                    tmp = right;                                                                                       // 2388
                    right = left;                                                                                      // 2389
                    left = tmp;                                                                                        // 2390
                    drawLeft = true;                                                                                   // 2391
                    drawRight = false;                                                                                 // 2392
                }                                                                                                      // 2393
            }                                                                                                          // 2394
            else {                                                                                                     // 2395
                drawLeft = drawRight = drawTop = true;                                                                 // 2396
                drawBottom = false;                                                                                    // 2397
                left = x + barLeft;                                                                                    // 2398
                right = x + barRight;                                                                                  // 2399
                bottom = b;                                                                                            // 2400
                top = y;                                                                                               // 2401
                                                                                                                       // 2402
                // account for negative bars                                                                           // 2403
                if (top < bottom) {                                                                                    // 2404
                    tmp = top;                                                                                         // 2405
                    top = bottom;                                                                                      // 2406
                    bottom = tmp;                                                                                      // 2407
                    drawBottom = true;                                                                                 // 2408
                    drawTop = false;                                                                                   // 2409
                }                                                                                                      // 2410
            }                                                                                                          // 2411
                                                                                                                       // 2412
            // clip                                                                                                    // 2413
            if (right < axisx.min || left > axisx.max ||                                                               // 2414
                top < axisy.min || bottom > axisy.max)                                                                 // 2415
                return;                                                                                                // 2416
                                                                                                                       // 2417
            if (left < axisx.min) {                                                                                    // 2418
                left = axisx.min;                                                                                      // 2419
                drawLeft = false;                                                                                      // 2420
            }                                                                                                          // 2421
                                                                                                                       // 2422
            if (right > axisx.max) {                                                                                   // 2423
                right = axisx.max;                                                                                     // 2424
                drawRight = false;                                                                                     // 2425
            }                                                                                                          // 2426
                                                                                                                       // 2427
            if (bottom < axisy.min) {                                                                                  // 2428
                bottom = axisy.min;                                                                                    // 2429
                drawBottom = false;                                                                                    // 2430
            }                                                                                                          // 2431
                                                                                                                       // 2432
            if (top > axisy.max) {                                                                                     // 2433
                top = axisy.max;                                                                                       // 2434
                drawTop = false;                                                                                       // 2435
            }                                                                                                          // 2436
                                                                                                                       // 2437
            left = axisx.p2c(left);                                                                                    // 2438
            bottom = axisy.p2c(bottom);                                                                                // 2439
            right = axisx.p2c(right);                                                                                  // 2440
            top = axisy.p2c(top);                                                                                      // 2441
                                                                                                                       // 2442
            // fill the bar                                                                                            // 2443
            if (fillStyleCallback) {                                                                                   // 2444
                c.beginPath();                                                                                         // 2445
                c.moveTo(left, bottom);                                                                                // 2446
                c.lineTo(left, top);                                                                                   // 2447
                c.lineTo(right, top);                                                                                  // 2448
                c.lineTo(right, bottom);                                                                               // 2449
                c.fillStyle = fillStyleCallback(bottom, top);                                                          // 2450
                c.fill();                                                                                              // 2451
            }                                                                                                          // 2452
                                                                                                                       // 2453
            // draw outline                                                                                            // 2454
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {                                   // 2455
                c.beginPath();                                                                                         // 2456
                                                                                                                       // 2457
                // FIXME: inline moveTo is buggy with excanvas                                                         // 2458
                c.moveTo(left, bottom + offset);                                                                       // 2459
                if (drawLeft)                                                                                          // 2460
                    c.lineTo(left, top + offset);                                                                      // 2461
                else                                                                                                   // 2462
                    c.moveTo(left, top + offset);                                                                      // 2463
                if (drawTop)                                                                                           // 2464
                    c.lineTo(right, top + offset);                                                                     // 2465
                else                                                                                                   // 2466
                    c.moveTo(right, top + offset);                                                                     // 2467
                if (drawRight)                                                                                         // 2468
                    c.lineTo(right, bottom + offset);                                                                  // 2469
                else                                                                                                   // 2470
                    c.moveTo(right, bottom + offset);                                                                  // 2471
                if (drawBottom)                                                                                        // 2472
                    c.lineTo(left, bottom + offset);                                                                   // 2473
                else                                                                                                   // 2474
                    c.moveTo(left, bottom + offset);                                                                   // 2475
                c.stroke();                                                                                            // 2476
            }                                                                                                          // 2477
        }                                                                                                              // 2478
                                                                                                                       // 2479
        function drawSeriesBars(series) {                                                                              // 2480
            function plotBars(datapoints, barLeft, barRight, offset, fillStyleCallback, axisx, axisy) {                // 2481
                var points = datapoints.points, ps = datapoints.pointsize;                                             // 2482
                                                                                                                       // 2483
                for (var i = 0; i < points.length; i += ps) {                                                          // 2484
                    if (points[i] == null)                                                                             // 2485
                        continue;                                                                                      // 2486
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, offset, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }                                                                                                      // 2488
            }                                                                                                          // 2489
                                                                                                                       // 2490
            ctx.save();                                                                                                // 2491
            ctx.translate(plotOffset.left, plotOffset.top);                                                            // 2492
                                                                                                                       // 2493
            // FIXME: figure out a way to add shadows (for instance along the right edge)                              // 2494
            ctx.lineWidth = series.bars.lineWidth;                                                                     // 2495
            ctx.strokeStyle = series.color;                                                                            // 2496
                                                                                                                       // 2497
            var barLeft;                                                                                               // 2498
                                                                                                                       // 2499
            switch (series.bars.align) {                                                                               // 2500
                case "left":                                                                                           // 2501
                    barLeft = 0;                                                                                       // 2502
                    break;                                                                                             // 2503
                case "right":                                                                                          // 2504
                    barLeft = -series.bars.barWidth;                                                                   // 2505
                    break;                                                                                             // 2506
                case "center":                                                                                         // 2507
                    barLeft = -series.bars.barWidth / 2;                                                               // 2508
                    break;                                                                                             // 2509
                default:                                                                                               // 2510
                    throw new Error("Invalid bar alignment: " + series.bars.align);                                    // 2511
            }                                                                                                          // 2512
                                                                                                                       // 2513
            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, 0, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();                                                                                             // 2516
        }                                                                                                              // 2517
                                                                                                                       // 2518
        function getFillStyle(filloptions, seriesColor, bottom, top) {                                                 // 2519
            var fill = filloptions.fill;                                                                               // 2520
            if (!fill)                                                                                                 // 2521
                return null;                                                                                           // 2522
                                                                                                                       // 2523
            if (filloptions.fillColor)                                                                                 // 2524
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);                            // 2525
                                                                                                                       // 2526
            var c = $.color.parse(seriesColor);                                                                        // 2527
            c.a = typeof fill == "number" ? fill : 0.4;                                                                // 2528
            c.normalize();                                                                                             // 2529
            return c.toString();                                                                                       // 2530
        }                                                                                                              // 2531
                                                                                                                       // 2532
        function insertLegend() {                                                                                      // 2533
                                                                                                                       // 2534
            placeholder.find(".legend").remove();                                                                      // 2535
                                                                                                                       // 2536
            if (!options.legend.show)                                                                                  // 2537
                return;                                                                                                // 2538
                                                                                                                       // 2539
            var fragments = [], entries = [], rowStarted = false,                                                      // 2540
                lf = options.legend.labelFormatter, s, label;                                                          // 2541
                                                                                                                       // 2542
            // Build a list of legend entries, with each having a label and a color                                    // 2543
                                                                                                                       // 2544
            for (var i = 0; i < series.length; ++i) {                                                                  // 2545
                s = series[i];                                                                                         // 2546
                if (s.label) {                                                                                         // 2547
                    label = lf ? lf(s.label, s) : s.label;                                                             // 2548
                    if (label) {                                                                                       // 2549
                        entries.push({                                                                                 // 2550
                            label: label,                                                                              // 2551
                            color: s.color                                                                             // 2552
                        });                                                                                            // 2553
                    }                                                                                                  // 2554
                }                                                                                                      // 2555
            }                                                                                                          // 2556
                                                                                                                       // 2557
            // Sort the legend using either the default or a custom comparator                                         // 2558
                                                                                                                       // 2559
            if (options.legend.sorted) {                                                                               // 2560
                if ($.isFunction(options.legend.sorted)) {                                                             // 2561
                    entries.sort(options.legend.sorted);                                                               // 2562
                } else if (options.legend.sorted == "reverse") {                                                       // 2563
                	entries.reverse();                                                                                    // 2564
                } else {                                                                                               // 2565
                    var ascending = options.legend.sorted != "descending";                                             // 2566
                    entries.sort(function(a, b) {                                                                      // 2567
                        return a.label == b.label ? 0 : (                                                              // 2568
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR                                 // 2569
                        );                                                                                             // 2570
                    });                                                                                                // 2571
                }                                                                                                      // 2572
            }                                                                                                          // 2573
                                                                                                                       // 2574
            // Generate markup for the list of entries, in their final order                                           // 2575
                                                                                                                       // 2576
            for (var i = 0; i < entries.length; ++i) {                                                                 // 2577
                                                                                                                       // 2578
                var entry = entries[i];                                                                                // 2579
                                                                                                                       // 2580
                if (i % options.legend.noColumns == 0) {                                                               // 2581
                    if (rowStarted)                                                                                    // 2582
                        fragments.push('</tr>');                                                                       // 2583
                    fragments.push('<tr>');                                                                            // 2584
                    rowStarted = true;                                                                                 // 2585
                }                                                                                                      // 2586
                                                                                                                       // 2587
                fragments.push(                                                                                        // 2588
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'                                                 // 2590
                );                                                                                                     // 2591
            }                                                                                                          // 2592
                                                                                                                       // 2593
            if (rowStarted)                                                                                            // 2594
                fragments.push('</tr>');                                                                               // 2595
                                                                                                                       // 2596
            if (fragments.length == 0)                                                                                 // 2597
                return;                                                                                                // 2598
                                                                                                                       // 2599
            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)                                                                      // 2601
                $(options.legend.container).html(table);                                                               // 2602
            else {                                                                                                     // 2603
                var pos = "",                                                                                          // 2604
                    p = options.legend.position,                                                                       // 2605
                    m = options.legend.margin;                                                                         // 2606
                if (m[0] == null)                                                                                      // 2607
                    m = [m, m];                                                                                        // 2608
                if (p.charAt(0) == "n")                                                                                // 2609
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';                                                   // 2610
                else if (p.charAt(0) == "s")                                                                           // 2611
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';                                             // 2612
                if (p.charAt(1) == "e")                                                                                // 2613
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';                                               // 2614
                else if (p.charAt(1) == "w")                                                                           // 2615
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';                                                 // 2616
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {                                                         // 2618
                    // put in the transparent background                                                               // 2619
                    // separately to avoid blended labels and                                                          // 2620
                    // label boxes                                                                                     // 2621
                    var c = options.legend.backgroundColor;                                                            // 2622
                    if (c == null) {                                                                                   // 2623
                        c = options.grid.backgroundColor;                                                              // 2624
                        if (c && typeof c == "string")                                                                 // 2625
                            c = $.color.parse(c);                                                                      // 2626
                        else                                                                                           // 2627
                            c = $.color.extract(legend, 'background-color');                                           // 2628
                        c.a = 1;                                                                                       // 2629
                        c = c.toString();                                                                              // 2630
                    }                                                                                                  // 2631
                    var div = legend.children();                                                                       // 2632
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }                                                                                                      // 2634
            }                                                                                                          // 2635
        }                                                                                                              // 2636
                                                                                                                       // 2637
                                                                                                                       // 2638
        // interactive features                                                                                        // 2639
                                                                                                                       // 2640
        var highlights = [],                                                                                           // 2641
            redrawTimeout = null;                                                                                      // 2642
                                                                                                                       // 2643
        // returns the data item the mouse is over, or null if none is found                                           // 2644
        function findNearbyItem(mouseX, mouseY, seriesFilter) {                                                        // 2645
            var maxDistance = options.grid.mouseActiveRadius,                                                          // 2646
                smallestDistance = maxDistance * maxDistance + 1,                                                      // 2647
                item = null, foundPoint = false, i, j, ps;                                                             // 2648
                                                                                                                       // 2649
            for (i = series.length - 1; i >= 0; --i) {                                                                 // 2650
                if (!seriesFilter(series[i]))                                                                          // 2651
                    continue;                                                                                          // 2652
                                                                                                                       // 2653
                var s = series[i],                                                                                     // 2654
                    axisx = s.xaxis,                                                                                   // 2655
                    axisy = s.yaxis,                                                                                   // 2656
                    points = s.datapoints.points,                                                                      // 2657
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster                           // 2658
                    my = axisy.c2p(mouseY),                                                                            // 2659
                    maxx = maxDistance / axisx.scale,                                                                  // 2660
                    maxy = maxDistance / axisy.scale;                                                                  // 2661
                                                                                                                       // 2662
                ps = s.datapoints.pointsize;                                                                           // 2663
                // with inverse transforms, we can't use the maxx/maxy                                                 // 2664
                // optimization, sadly                                                                                 // 2665
                if (axisx.options.inverseTransform)                                                                    // 2666
                    maxx = Number.MAX_VALUE;                                                                           // 2667
                if (axisy.options.inverseTransform)                                                                    // 2668
                    maxy = Number.MAX_VALUE;                                                                           // 2669
                                                                                                                       // 2670
                if (s.lines.show || s.points.show) {                                                                   // 2671
                    for (j = 0; j < points.length; j += ps) {                                                          // 2672
                        var x = points[j], y = points[j + 1];                                                          // 2673
                        if (x == null)                                                                                 // 2674
                            continue;                                                                                  // 2675
                                                                                                                       // 2676
                        // For points and lines, the cursor must be within a                                           // 2677
                        // certain distance to the data point                                                          // 2678
                        if (x - mx > maxx || x - mx < -maxx ||                                                         // 2679
                            y - my > maxy || y - my < -maxy)                                                           // 2680
                            continue;                                                                                  // 2681
                                                                                                                       // 2682
                        // We have to calculate distances in pixels, not in                                            // 2683
                        // data units, because the scales of the axes may be different                                 // 2684
                        var dx = Math.abs(axisx.p2c(x) - mouseX),                                                      // 2685
                            dy = Math.abs(axisy.p2c(y) - mouseY),                                                      // 2686
                            dist = dx * dx + dy * dy; // we save the sqrt                                              // 2687
                                                                                                                       // 2688
                        // use <= to ensure last point takes precedence                                                // 2689
                        // (last generally means on top of)                                                            // 2690
                        if (dist < smallestDistance) {                                                                 // 2691
                            smallestDistance = dist;                                                                   // 2692
                            item = [i, j / ps];                                                                        // 2693
                        }                                                                                              // 2694
                    }                                                                                                  // 2695
                }                                                                                                      // 2696
                                                                                                                       // 2697
                if (s.bars.show && !item) { // no other point can be nearby                                            // 2698
                    var barLeft = s.bars.align == "left" ? 0 : -s.bars.barWidth/2,                                     // 2699
                        barRight = barLeft + s.bars.barWidth;                                                          // 2700
                                                                                                                       // 2701
                    for (j = 0; j < points.length; j += ps) {                                                          // 2702
                        var x = points[j], y = points[j + 1], b = points[j + 2];                                       // 2703
                        if (x == null)                                                                                 // 2704
                            continue;                                                                                  // 2705
                                                                                                                       // 2706
                        // for a bar graph, the cursor must be inside the bar                                          // 2707
                        if (series[i].bars.horizontal ?                                                                // 2708
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&                                           // 2709
                             my >= y + barLeft && my <= y + barRight) :                                                // 2710
                            (mx >= x + barLeft && mx <= x + barRight &&                                                // 2711
                             my >= Math.min(b, y) && my <= Math.max(b, y)))                                            // 2712
                                item = [i, j / ps];                                                                    // 2713
                    }                                                                                                  // 2714
                }                                                                                                      // 2715
            }                                                                                                          // 2716
                                                                                                                       // 2717
            if (item) {                                                                                                // 2718
                i = item[0];                                                                                           // 2719
                j = item[1];                                                                                           // 2720
                ps = series[i].datapoints.pointsize;                                                                   // 2721
                                                                                                                       // 2722
                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),                           // 2723
                         dataIndex: j,                                                                                 // 2724
                         series: series[i],                                                                            // 2725
                         seriesIndex: i };                                                                             // 2726
            }                                                                                                          // 2727
                                                                                                                       // 2728
            return null;                                                                                               // 2729
        }                                                                                                              // 2730
                                                                                                                       // 2731
        function onMouseMove(e) {                                                                                      // 2732
            if (options.grid.hoverable)                                                                                // 2733
                triggerClickHoverEvent("plothover", e,                                                                 // 2734
                                       function (s) { return s["hoverable"] != false; });                              // 2735
        }                                                                                                              // 2736
                                                                                                                       // 2737
        function onMouseLeave(e) {                                                                                     // 2738
            if (options.grid.hoverable)                                                                                // 2739
                triggerClickHoverEvent("plothover", e,                                                                 // 2740
                                       function (s) { return false; });                                                // 2741
        }                                                                                                              // 2742
                                                                                                                       // 2743
        function onClick(e) {                                                                                          // 2744
            triggerClickHoverEvent("plotclick", e,                                                                     // 2745
                                   function (s) { return s["clickable"] != false; });                                  // 2746
        }                                                                                                              // 2747
                                                                                                                       // 2748
        // trigger click or hover event (they send the same parameters                                                 // 2749
        // so we share their code)                                                                                     // 2750
        function triggerClickHoverEvent(eventname, event, seriesFilter) {                                              // 2751
            var offset = eventHolder.offset(),                                                                         // 2752
                canvasX = event.pageX - offset.left - plotOffset.left,                                                 // 2753
                canvasY = event.pageY - offset.top - plotOffset.top,                                                   // 2754
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });                                                 // 2755
                                                                                                                       // 2756
            pos.pageX = event.pageX;                                                                                   // 2757
            pos.pageY = event.pageY;                                                                                   // 2758
                                                                                                                       // 2759
            var item = findNearbyItem(canvasX, canvasY, seriesFilter);                                                 // 2760
                                                                                                                       // 2761
            if (item) {                                                                                                // 2762
                // fill in mouse pos for any listeners out there                                                       // 2763
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);   // 2764
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);     // 2765
            }                                                                                                          // 2766
                                                                                                                       // 2767
            if (options.grid.autoHighlight) {                                                                          // 2768
                // clear auto-highlights                                                                               // 2769
                for (var i = 0; i < highlights.length; ++i) {                                                          // 2770
                    var h = highlights[i];                                                                             // 2771
                    if (h.auto == eventname &&                                                                         // 2772
                        !(item && h.series == item.series &&                                                           // 2773
                          h.point[0] == item.datapoint[0] &&                                                           // 2774
                          h.point[1] == item.datapoint[1]))                                                            // 2775
                        unhighlight(h.series, h.point);                                                                // 2776
                }                                                                                                      // 2777
                                                                                                                       // 2778
                if (item)                                                                                              // 2779
                    highlight(item.series, item.datapoint, eventname);                                                 // 2780
            }                                                                                                          // 2781
                                                                                                                       // 2782
            placeholder.trigger(eventname, [ pos, item ]);                                                             // 2783
        }                                                                                                              // 2784
                                                                                                                       // 2785
        function triggerRedrawOverlay() {                                                                              // 2786
            var t = options.interaction.redrawOverlayInterval;                                                         // 2787
            if (t == -1) {      // skip event queue                                                                    // 2788
                drawOverlay();                                                                                         // 2789
                return;                                                                                                // 2790
            }                                                                                                          // 2791
                                                                                                                       // 2792
            if (!redrawTimeout)                                                                                        // 2793
                redrawTimeout = setTimeout(drawOverlay, t);                                                            // 2794
        }                                                                                                              // 2795
                                                                                                                       // 2796
        function drawOverlay() {                                                                                       // 2797
            redrawTimeout = null;                                                                                      // 2798
                                                                                                                       // 2799
            // draw highlights                                                                                         // 2800
            octx.save();                                                                                               // 2801
            overlay.clear();                                                                                           // 2802
            octx.translate(plotOffset.left, plotOffset.top);                                                           // 2803
                                                                                                                       // 2804
            var i, hi;                                                                                                 // 2805
            for (i = 0; i < highlights.length; ++i) {                                                                  // 2806
                hi = highlights[i];                                                                                    // 2807
                                                                                                                       // 2808
                if (hi.series.bars.show)                                                                               // 2809
                    drawBarHighlight(hi.series, hi.point);                                                             // 2810
                else                                                                                                   // 2811
                    drawPointHighlight(hi.series, hi.point);                                                           // 2812
            }                                                                                                          // 2813
            octx.restore();                                                                                            // 2814
                                                                                                                       // 2815
            executeHooks(hooks.drawOverlay, [octx]);                                                                   // 2816
        }                                                                                                              // 2817
                                                                                                                       // 2818
        function highlight(s, point, auto) {                                                                           // 2819
            if (typeof s == "number")                                                                                  // 2820
                s = series[s];                                                                                         // 2821
                                                                                                                       // 2822
            if (typeof point == "number") {                                                                            // 2823
                var ps = s.datapoints.pointsize;                                                                       // 2824
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));                                       // 2825
            }                                                                                                          // 2826
                                                                                                                       // 2827
            var i = indexOfHighlight(s, point);                                                                        // 2828
            if (i == -1) {                                                                                             // 2829
                highlights.push({ series: s, point: point, auto: auto });                                              // 2830
                                                                                                                       // 2831
                triggerRedrawOverlay();                                                                                // 2832
            }                                                                                                          // 2833
            else if (!auto)                                                                                            // 2834
                highlights[i].auto = false;                                                                            // 2835
        }                                                                                                              // 2836
                                                                                                                       // 2837
        function unhighlight(s, point) {                                                                               // 2838
            if (s == null && point == null) {                                                                          // 2839
                highlights = [];                                                                                       // 2840
                triggerRedrawOverlay();                                                                                // 2841
                return;                                                                                                // 2842
            }                                                                                                          // 2843
                                                                                                                       // 2844
            if (typeof s == "number")                                                                                  // 2845
                s = series[s];                                                                                         // 2846
                                                                                                                       // 2847
            if (typeof point == "number") {                                                                            // 2848
                var ps = s.datapoints.pointsize;                                                                       // 2849
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));                                       // 2850
            }                                                                                                          // 2851
                                                                                                                       // 2852
            var i = indexOfHighlight(s, point);                                                                        // 2853
            if (i != -1) {                                                                                             // 2854
                highlights.splice(i, 1);                                                                               // 2855
                                                                                                                       // 2856
                triggerRedrawOverlay();                                                                                // 2857
            }                                                                                                          // 2858
        }                                                                                                              // 2859
                                                                                                                       // 2860
        function indexOfHighlight(s, p) {                                                                              // 2861
            for (var i = 0; i < highlights.length; ++i) {                                                              // 2862
                var h = highlights[i];                                                                                 // 2863
                if (h.series == s && h.point[0] == p[0]                                                                // 2864
                    && h.point[1] == p[1])                                                                             // 2865
                    return i;                                                                                          // 2866
            }                                                                                                          // 2867
            return -1;                                                                                                 // 2868
        }                                                                                                              // 2869
                                                                                                                       // 2870
        function drawPointHighlight(series, point) {                                                                   // 2871
            var x = point[0], y = point[1],                                                                            // 2872
                axisx = series.xaxis, axisy = series.yaxis,                                                            // 2873
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();
                                                                                                                       // 2875
            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)                                      // 2876
                return;                                                                                                // 2877
                                                                                                                       // 2878
            var pointRadius = series.points.radius + series.points.lineWidth / 2;                                      // 2879
            octx.lineWidth = pointRadius;                                                                              // 2880
            octx.strokeStyle = highlightColor;                                                                         // 2881
            var radius = 1.5 * pointRadius;                                                                            // 2882
            x = axisx.p2c(x);                                                                                          // 2883
            y = axisy.p2c(y);                                                                                          // 2884
                                                                                                                       // 2885
            octx.beginPath();                                                                                          // 2886
            if (series.points.symbol == "circle")                                                                      // 2887
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);                                                         // 2888
            else                                                                                                       // 2889
                series.points.symbol(octx, x, y, radius, false);                                                       // 2890
            octx.closePath();                                                                                          // 2891
            octx.stroke();                                                                                             // 2892
        }                                                                                                              // 2893
                                                                                                                       // 2894
        function drawBarHighlight(series, point) {                                                                     // 2895
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,                                                                            // 2897
                barLeft = series.bars.align == "left" ? 0 : -series.bars.barWidth/2;                                   // 2898
                                                                                                                       // 2899
            octx.lineWidth = series.bars.lineWidth;                                                                    // 2900
            octx.strokeStyle = highlightColor;                                                                         // 2901
                                                                                                                       // 2902
            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,                        // 2903
                    0, function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }                                                                                                              // 2905
                                                                                                                       // 2906
        function getColorOrGradient(spec, bottom, top, defaultColor) {                                                 // 2907
            if (typeof spec == "string")                                                                               // 2908
                return spec;                                                                                           // 2909
            else {                                                                                                     // 2910
                // assume this is a gradient spec; IE currently only                                                   // 2911
                // supports a simple vertical gradient properly, so that's                                             // 2912
                // what we support too                                                                                 // 2913
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);                                            // 2914
                                                                                                                       // 2915
                for (var i = 0, l = spec.colors.length; i < l; ++i) {                                                  // 2916
                    var c = spec.colors[i];                                                                            // 2917
                    if (typeof c != "string") {                                                                        // 2918
                        var co = $.color.parse(defaultColor);                                                          // 2919
                        if (c.brightness != null)                                                                      // 2920
                            co = co.scale('rgb', c.brightness);                                                        // 2921
                        if (c.opacity != null)                                                                         // 2922
                            co.a *= c.opacity;                                                                         // 2923
                        c = co.toString();                                                                             // 2924
                    }                                                                                                  // 2925
                    gradient.addColorStop(i / (l - 1), c);                                                             // 2926
                }                                                                                                      // 2927
                                                                                                                       // 2928
                return gradient;                                                                                       // 2929
            }                                                                                                          // 2930
        }                                                                                                              // 2931
    }                                                                                                                  // 2932
                                                                                                                       // 2933
    // Add the plot function to the top level of the jQuery object                                                     // 2934
                                                                                                                       // 2935
    $.plot = function(placeholder, data, options) {                                                                    // 2936
        //var t0 = new Date();                                                                                         // 2937
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);                                            // 2938
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));     // 2939
        return plot;                                                                                                   // 2940
    };                                                                                                                 // 2941
                                                                                                                       // 2942
    $.plot.version = "0.8.0-beta";                                                                                     // 2943
                                                                                                                       // 2944
    $.plot.plugins = [];                                                                                               // 2945
                                                                                                                       // 2946
    // Also add the plot function as a chainable property                                                              // 2947
                                                                                                                       // 2948
    $.fn.plot = function(data, options) {                                                                              // 2949
        return this.each(function() {                                                                                  // 2950
            $.plot(this, data, options);                                                                               // 2951
        });                                                                                                            // 2952
    }                                                                                                                  // 2953
                                                                                                                       // 2954
    // round to nearby lower multiple of base                                                                          // 2955
    function floorInBase(n, base) {                                                                                    // 2956
        return base * Math.floor(n / base);                                                                            // 2957
    }                                                                                                                  // 2958
                                                                                                                       // 2959
})(jQuery);                                                                                                            // 2960
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/bootstrap-3/bootstrap-3/js/jquery.flot.stack.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* Flot plugin for stacking data sets rather than overlyaing them.                                                     // 1
                                                                                                                       // 2
Copyright (c) 2007-2013 IOLA and Ole Laursen.                                                                          // 3
Licensed under the MIT license.                                                                                        // 4
                                                                                                                       // 5
The plugin assumes the data is sorted on x (or y if stacking horizontally).                                            // 6
For line charts, it is assumed that if a line has an undefined gap (from a                                             // 7
null point), then the line above it should have the same gap - insert zeros                                            // 8
instead of "null" if you want another behaviour. This also holds for the start                                         // 9
and end of the chart. Note that stacking a mix of positive and negative values                                         // 10
in most instances doesn't make sense (so it looks weird).                                                              // 11
                                                                                                                       // 12
Two or more series are stacked when their "stack" attribute is set to the same                                         // 13
key (which can be any number or string or just "true"). To specify the default                                         // 14
stack, you can set the stack option like this:                                                                         // 15
                                                                                                                       // 16
	series: {                                                                                                             // 17
		stack: null/false, true, or a key (number/string)                                                                    // 18
	}                                                                                                                     // 19
                                                                                                                       // 20
You can also specify it for a single series, like this:                                                                // 21
                                                                                                                       // 22
	$.plot( $("#placeholder"), [{                                                                                         // 23
		data: [ ... ],                                                                                                       // 24
		stack: true                                                                                                          // 25
	}])                                                                                                                   // 26
                                                                                                                       // 27
The stacking order is determined by the order of the data series in the array                                          // 28
(later series end up on top of the previous).                                                                          // 29
                                                                                                                       // 30
Internally, the plugin modifies the datapoints in each series, adding an                                               // 31
offset to the y value. For line series, extra data points are inserted through                                         // 32
interpolation. If there's a second y value, it's also adjusted (e.g for bar                                            // 33
charts or filled areas).                                                                                               // 34
                                                                                                                       // 35
*/                                                                                                                     // 36
                                                                                                                       // 37
(function ($) {                                                                                                        // 38
    var options = {                                                                                                    // 39
        series: { stack: null } // or number/string                                                                    // 40
    };                                                                                                                 // 41
                                                                                                                       // 42
    function init(plot) {                                                                                              // 43
        function findMatchingSeries(s, allseries) {                                                                    // 44
            var res = null;                                                                                            // 45
            for (var i = 0; i < allseries.length; ++i) {                                                               // 46
                if (s == allseries[i])                                                                                 // 47
                    break;                                                                                             // 48
                                                                                                                       // 49
                if (allseries[i].stack == s.stack)                                                                     // 50
                    res = allseries[i];                                                                                // 51
            }                                                                                                          // 52
                                                                                                                       // 53
            return res;                                                                                                // 54
        }                                                                                                              // 55
                                                                                                                       // 56
        function stackData(plot, s, datapoints) {                                                                      // 57
            if (s.stack == null || s.stack === false)                                                                  // 58
                return;                                                                                                // 59
                                                                                                                       // 60
            var other = findMatchingSeries(s, plot.getData());                                                         // 61
            if (!other)                                                                                                // 62
                return;                                                                                                // 63
                                                                                                                       // 64
            var ps = datapoints.pointsize,                                                                             // 65
                points = datapoints.points,                                                                            // 66
                otherps = other.datapoints.pointsize,                                                                  // 67
                otherpoints = other.datapoints.points,                                                                 // 68
                newpoints = [],                                                                                        // 69
                px, py, intery, qx, qy, bottom,                                                                        // 70
                withlines = s.lines.show,                                                                              // 71
                horizontal = s.bars.horizontal,                                                                        // 72
                withbottom = ps > 2 && (horizontal ? datapoints.format[2].x : datapoints.format[2].y),                 // 73
                withsteps = withlines && s.lines.steps,                                                                // 74
                fromgap = true,                                                                                        // 75
                keyOffset = horizontal ? 1 : 0,                                                                        // 76
                accumulateOffset = horizontal ? 0 : 1,                                                                 // 77
                i = 0, j = 0, l, m;                                                                                    // 78
                                                                                                                       // 79
            while (true) {                                                                                             // 80
                if (i >= points.length)                                                                                // 81
                    break;                                                                                             // 82
                                                                                                                       // 83
                l = newpoints.length;                                                                                  // 84
                                                                                                                       // 85
                if (points[i] == null) {                                                                               // 86
                    // copy gaps                                                                                       // 87
                    for (m = 0; m < ps; ++m)                                                                           // 88
                        newpoints.push(points[i + m]);                                                                 // 89
                    i += ps;                                                                                           // 90
                }                                                                                                      // 91
                else if (j >= otherpoints.length) {                                                                    // 92
                    // for lines, we can't use the rest of the points                                                  // 93
                    if (!withlines) {                                                                                  // 94
                        for (m = 0; m < ps; ++m)                                                                       // 95
                            newpoints.push(points[i + m]);                                                             // 96
                    }                                                                                                  // 97
                    i += ps;                                                                                           // 98
                }                                                                                                      // 99
                else if (otherpoints[j] == null) {                                                                     // 100
                    // oops, got a gap                                                                                 // 101
                    for (m = 0; m < ps; ++m)                                                                           // 102
                        newpoints.push(null);                                                                          // 103
                    fromgap = true;                                                                                    // 104
                    j += otherps;                                                                                      // 105
                }                                                                                                      // 106
                else {                                                                                                 // 107
                    // cases where we actually got two points                                                          // 108
                    px = points[i + keyOffset];                                                                        // 109
                    py = points[i + accumulateOffset];                                                                 // 110
                    qx = otherpoints[j + keyOffset];                                                                   // 111
                    qy = otherpoints[j + accumulateOffset];                                                            // 112
                    bottom = 0;                                                                                        // 113
                                                                                                                       // 114
                    if (px == qx) {                                                                                    // 115
                        for (m = 0; m < ps; ++m)                                                                       // 116
                            newpoints.push(points[i + m]);                                                             // 117
                                                                                                                       // 118
                        newpoints[l + accumulateOffset] += qy;                                                         // 119
                        bottom = qy;                                                                                   // 120
                                                                                                                       // 121
                        i += ps;                                                                                       // 122
                        j += otherps;                                                                                  // 123
                    }                                                                                                  // 124
                    else if (px > qx) {                                                                                // 125
                        // we got past point below, might need to                                                      // 126
                        // insert interpolated extra point                                                             // 127
                        if (withlines && i > 0 && points[i - ps] != null) {                                            // 128
                            intery = py + (points[i - ps + accumulateOffset] - py) * (qx - px) / (points[i - ps + keyOffset] - px);
                            newpoints.push(qx);                                                                        // 130
                            newpoints.push(intery + qy);                                                               // 131
                            for (m = 2; m < ps; ++m)                                                                   // 132
                                newpoints.push(points[i + m]);                                                         // 133
                            bottom = qy;                                                                               // 134
                        }                                                                                              // 135
                                                                                                                       // 136
                        j += otherps;                                                                                  // 137
                    }                                                                                                  // 138
                    else { // px < qx                                                                                  // 139
                        if (fromgap && withlines) {                                                                    // 140
                            // if we come from a gap, we just skip this point                                          // 141
                            i += ps;                                                                                   // 142
                            continue;                                                                                  // 143
                        }                                                                                              // 144
                                                                                                                       // 145
                        for (m = 0; m < ps; ++m)                                                                       // 146
                            newpoints.push(points[i + m]);                                                             // 147
                                                                                                                       // 148
                        // we might be able to interpolate a point below,                                              // 149
                        // this can give us a better y                                                                 // 150
                        if (withlines && j > 0 && otherpoints[j - otherps] != null)                                    // 151
                            bottom = qy + (otherpoints[j - otherps + accumulateOffset] - qy) * (px - qx) / (otherpoints[j - otherps + keyOffset] - qx);
                                                                                                                       // 153
                        newpoints[l + accumulateOffset] += bottom;                                                     // 154
                                                                                                                       // 155
                        i += ps;                                                                                       // 156
                    }                                                                                                  // 157
                                                                                                                       // 158
                    fromgap = false;                                                                                   // 159
                                                                                                                       // 160
                    if (l != newpoints.length && withbottom)                                                           // 161
                        newpoints[l + 2] += bottom;                                                                    // 162
                }                                                                                                      // 163
                                                                                                                       // 164
                // maintain the line steps invariant                                                                   // 165
                if (withsteps && l != newpoints.length && l > 0                                                        // 166
                    && newpoints[l] != null                                                                            // 167
                    && newpoints[l] != newpoints[l - ps]                                                               // 168
                    && newpoints[l + 1] != newpoints[l - ps + 1]) {                                                    // 169
                    for (m = 0; m < ps; ++m)                                                                           // 170
                        newpoints[l + ps + m] = newpoints[l + m];                                                      // 171
                    newpoints[l + 1] = newpoints[l - ps + 1];                                                          // 172
                }                                                                                                      // 173
            }                                                                                                          // 174
                                                                                                                       // 175
            datapoints.points = newpoints;                                                                             // 176
        }                                                                                                              // 177
                                                                                                                       // 178
        plot.hooks.processDatapoints.push(stackData);                                                                  // 179
    }                                                                                                                  // 180
                                                                                                                       // 181
    $.plot.plugins.push({                                                                                              // 182
        init: init,                                                                                                    // 183
        options: options,                                                                                              // 184
        name: 'stack',                                                                                                 // 185
        version: '1.2'                                                                                                 // 186
    });                                                                                                                // 187
})(jQuery);                                                                                                            // 188
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/bootstrap-3/bootstrap-3/js/jquery.flot.resize.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* Flot plugin for automatically redrawing plots as the placeholder resizes.                                           // 1
                                                                                                                       // 2
Copyright (c) 2007-2013 IOLA and Ole Laursen.                                                                          // 3
Licensed under the MIT license.                                                                                        // 4
                                                                                                                       // 5
It works by listening for changes on the placeholder div (through the jQuery                                           // 6
resize event plugin) - if the size changes, it will redraw the plot.                                                   // 7
                                                                                                                       // 8
There are no options. If you need to disable the plugin for some plots, you                                            // 9
can just fix the size of their placeholders.                                                                           // 10
                                                                                                                       // 11
*/                                                                                                                     // 12
                                                                                                                       // 13
/* Inline dependency:                                                                                                  // 14
 * jQuery resize event - v1.1 - 3/14/2010                                                                              // 15
 * http://benalman.com/projects/jquery-resize-plugin/                                                                  // 16
 *                                                                                                                     // 17
 * Copyright (c) 2010 "Cowboy" Ben Alman                                                                               // 18
 * Dual licensed under the MIT and GPL licenses.                                                                       // 19
 * http://benalman.com/about/license/                                                                                  // 20
 */                                                                                                                    // 21
                                                                                                                       // 22
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);
                                                                                                                       // 24
(function ($) {                                                                                                        // 25
    var options = { }; // no options                                                                                   // 26
                                                                                                                       // 27
    function init(plot) {                                                                                              // 28
        function onResize() {                                                                                          // 29
            var placeholder = plot.getPlaceholder();                                                                   // 30
                                                                                                                       // 31
            // somebody might have hidden us and we can't plot                                                         // 32
            // when we don't have the dimensions                                                                       // 33
            if (placeholder.width() == 0 || placeholder.height() == 0)                                                 // 34
                return;                                                                                                // 35
                                                                                                                       // 36
            plot.resize();                                                                                             // 37
            plot.setupGrid();                                                                                          // 38
            plot.draw();                                                                                               // 39
        }                                                                                                              // 40
                                                                                                                       // 41
        function bindEvents(plot, eventHolder) {                                                                       // 42
            plot.getPlaceholder().resize(onResize);                                                                    // 43
        }                                                                                                              // 44
                                                                                                                       // 45
        function shutdown(plot, eventHolder) {                                                                         // 46
            plot.getPlaceholder().unbind("resize", onResize);                                                          // 47
        }                                                                                                              // 48
                                                                                                                       // 49
        plot.hooks.bindEvents.push(bindEvents);                                                                        // 50
        plot.hooks.shutdown.push(shutdown);                                                                            // 51
    }                                                                                                                  // 52
                                                                                                                       // 53
    $.plot.plugins.push({                                                                                              // 54
        init: init,                                                                                                    // 55
        options: options,                                                                                              // 56
        name: 'resize',                                                                                                // 57
        version: '1.0'                                                                                                 // 58
    });                                                                                                                // 59
})(jQuery);                                                                                                            // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/bootstrap-3/bootstrap-3/js/theme.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
$(function () {                                                                                                        // 1
                                                                                                                       // 2
  // navbar notification popups                                                                                        // 3
  $(".notification-dropdown").each(function (index, el) {                                                              // 4
    var $el = $(el);                                                                                                   // 5
    var $dialog = $el.find(".pop-dialog");                                                                             // 6
    var $trigger = $el.find(".trigger");                                                                               // 7
                                                                                                                       // 8
    $dialog.click(function (e) {                                                                                       // 9
        e.stopPropagation()                                                                                            // 10
    });                                                                                                                // 11
    $dialog.find(".close-icon").click(function (e) {                                                                   // 12
      e.preventDefault();                                                                                              // 13
      $dialog.removeClass("is-visible");                                                                               // 14
      $trigger.removeClass("active");                                                                                  // 15
    });                                                                                                                // 16
    $("body").click(function () {                                                                                      // 17
      $dialog.removeClass("is-visible");                                                                               // 18
      $trigger.removeClass("active");                                                                                  // 19
    });                                                                                                                // 20
                                                                                                                       // 21
    $trigger.click(function (e) {                                                                                      // 22
      e.preventDefault();                                                                                              // 23
      e.stopPropagation();                                                                                             // 24
                                                                                                                       // 25
      // hide all other pop-dialogs                                                                                    // 26
      $(".notification-dropdown .pop-dialog").removeClass("is-visible");                                               // 27
      $(".notification-dropdown .trigger").removeClass("active")                                                       // 28
                                                                                                                       // 29
      $dialog.toggleClass("is-visible");                                                                               // 30
      if ($dialog.hasClass("is-visible")) {                                                                            // 31
        $(this).addClass("active");                                                                                    // 32
      } else {                                                                                                         // 33
        $(this).removeClass("active");                                                                                 // 34
      }                                                                                                                // 35
    });                                                                                                                // 36
  });                                                                                                                  // 37
                                                                                                                       // 38
                                                                                                                       // 39
  // skin changer                                                                                                      // 40
  $(".skins-nav .skin").click(function (e) {                                                                           // 41
    e.preventDefault();                                                                                                // 42
    if ($(this).hasClass("selected")) {                                                                                // 43
      return;                                                                                                          // 44
    }                                                                                                                  // 45
    $(".skins-nav .skin").removeClass("selected");                                                                     // 46
    $(this).addClass("selected");                                                                                      // 47
                                                                                                                       // 48
    if (!$("#skin-file").length) {                                                                                     // 49
      $("head").append('<link rel="stylesheet" type="text/css" id="skin-file" href="">');                              // 50
    }                                                                                                                  // 51
    var $skin = $("#skin-file");                                                                                       // 52
    if ($(this).attr("data-file")) {                                                                                   // 53
      $skin.attr("href", $(this).data("file"));                                                                        // 54
    } else {                                                                                                           // 55
      $skin.attr("href", "");                                                                                          // 56
    }                                                                                                                  // 57
                                                                                                                       // 58
  });                                                                                                                  // 59
                                                                                                                       // 60
                                                                                                                       // 61
  // sidebar menu dropdown toggle                                                                                      // 62
  $("#dashboard-menu .dropdown-toggle").click(function (e) {                                                           // 63
    e.preventDefault();                                                                                                // 64
    var $item = $(this).parent();                                                                                      // 65
    $item.toggleClass("active");                                                                                       // 66
    if ($item.hasClass("active")) {                                                                                    // 67
      $item.find(".submenu").slideDown("fast");                                                                        // 68
    } else {                                                                                                           // 69
      $item.find(".submenu").slideUp("fast");                                                                          // 70
    }                                                                                                                  // 71
  });                                                                                                                  // 72
                                                                                                                       // 73
                                                                                                                       // 74
  // mobile side-menu slide toggler                                                                                    // 75
  var $menu = $("#sidebar-nav");                                                                                       // 76
  $("body").click(function () {                                                                                        // 77
    if ($(this).hasClass("menu")) {                                                                                    // 78
      $(this).removeClass("menu");                                                                                     // 79
    }                                                                                                                  // 80
  });                                                                                                                  // 81
  $menu.click(function(e) {                                                                                            // 82
    e.stopPropagation();                                                                                               // 83
  });                                                                                                                  // 84
  $("#menu-toggler").click(function (e) {                                                                              // 85
    e.stopPropagation();                                                                                               // 86
    $("body").toggleClass("menu");                                                                                     // 87
  });                                                                                                                  // 88
  $(window).resize(function() {                                                                                        // 89
    $(this).width() > 769 && $("body.menu").removeClass("menu")                                                        // 90
  })                                                                                                                   // 91
                                                                                                                       // 92
                                                                                                                       // 93
	// build all tooltips from data-attributes                                                                            // 94
	$("[data-toggle='tooltip']").each(function (index, el) {                                                              // 95
		$(el).tooltip({                                                                                                      // 96
			placement: $(this).data("placement") || 'top'                                                                       // 97
		});                                                                                                                  // 98
	});                                                                                                                   // 99
                                                                                                                       // 100
                                                                                                                       // 101
  // custom uiDropdown element, example can be seen in user-list.html on the 'Filter users' button                     // 102
	var uiDropdown = new function() {                                                                                     // 103
  	var self;                                                                                                           // 104
  	self = this;                                                                                                        // 105
  	this.hideDialog = function($el) {                                                                                   // 106
    		return $el.find(".dialog").hide().removeClass("is-visible");                                                     // 107
  	};                                                                                                                  // 108
  	this.showDialog = function($el) {                                                                                   // 109
    		return $el.find(".dialog").show().addClass("is-visible");                                                        // 110
  	};                                                                                                                  // 111
		return this.initialize = function() {                                                                                // 112
  		$("html").click(function() {                                                                                       // 113
    		$(".ui-dropdown .head").removeClass("active");                                                                   // 114
      		return self.hideDialog($(".ui-dropdown"));                                                                     // 115
    		});                                                                                                              // 116
    		$(".ui-dropdown .body").click(function(e) {                                                                      // 117
      		return e.stopPropagation();                                                                                    // 118
    		});                                                                                                              // 119
    		return $(".ui-dropdown").each(function(index, el) {                                                              // 120
      		return $(el).click(function(e) {                                                                               // 121
      			e.stopPropagation();                                                                                          // 122
      			$(el).find(".head").toggleClass("active");                                                                    // 123
      			if ($(el).find(".head").hasClass("active")) {                                                                 // 124
        			return self.showDialog($(el));                                                                              // 125
      			} else {                                                                                                      // 126
        			return self.hideDialog($(el));                                                                              // 127
      			}                                                                                                             // 128
      		});                                                                                                            // 129
    		});                                                                                                              // 130
    	};                                                                                                                // 131
  	};                                                                                                                  // 132
                                                                                                                       // 133
    // instantiate new uiDropdown from above to build the plugins                                                      // 134
  	new uiDropdown();                                                                                                   // 135
                                                                                                                       // 136
                                                                                                                       // 137
  	// toggle all checkboxes from a table when header checkbox is clicked                                               // 138
  	$(".table th input:checkbox").click(function () {                                                                   // 139
  		$checks = $(this).closest(".table").find("tbody input:checkbox");                                                  // 140
  		if ($(this).is(":checked")) {                                                                                      // 141
  			$checks.prop("checked", true);                                                                                    // 142
  		} else {                                                                                                           // 143
  			$checks.prop("checked", false);                                                                                   // 144
  		}  		                                                                                                              // 145
  	});                                                                                                                 // 146
                                                                                                                       // 147
    // quirk to fix dark skin sidebar menu because of B3 border-box                                                    // 148
    if ($("#sidebar-nav").height() > $(".content").height()) {                                                         // 149
      $("html").addClass("small");                                                                                     // 150
    }                                                                                                                  // 151
                                                                                                                       // 152
                                                                                                                       // 153
});                                                                                                                    // 154
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
