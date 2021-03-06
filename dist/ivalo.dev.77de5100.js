// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.compute_slots = compute_slots;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_crossorigin = is_crossorigin;
exports.is_empty = is_empty;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.update_slot = update_slot;
exports.validate_component = validate_component;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.has_prop = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);

  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);

  for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];

  return rest;
}

function compute_slots(slots) {
  const result = {};

  for (const key in slots) {
    result[key] = true;
  }

  return result;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  const value = new Set();

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value.delete(__value);
  }

  return Array.from(value);
}

function to_number(value) {
  return value === '' ? null : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      let j = 0;
      const remove = [];

      while (j < node.attributes.length) {
        const attribute = node.attributes[j++];

        if (!attributes[attribute.name]) {
          remove.push(attribute.name);
        }
      }

      for (let k = 0; k < remove.length; k++) {
        node.removeAttribute(remove[k]);
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.wholeText !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
} // unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead


let crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  const computed_style = getComputedStyle(node);
  const z_index = (parseInt(computed_style.zIndex) || 0) - 1;

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  const iframe = element('iframe');
  iframe.setAttribute('style', `display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ` + `overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${z_index};`);
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  const crossorigin = is_crossorigin();
  let unsubscribe;

  if (crossorigin) {
    iframe.src = `data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>`;
    unsubscribe = listen(window, 'message', event => {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = () => {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return () => {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}

class HtmlTag {
  constructor(anchor = null) {
    this.a = anchor;
    this.e = this.n = null;
  }

  m(html, target, anchor = null) {
    if (!this.e) {
      this.e = element(target.nodeName);
      this.t = target;
      this.h(html);
    }

    this.i(anchor);
  }

  h(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(this.t, this.n[i], anchor);
    }
  }

  p(html) {
    this.d();
    this.h(html);
    this.i(this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
const active_docs = new Set();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = node.ownerDocument;
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    active_docs.forEach(doc => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);

      if (!info.hasCatch) {
        throw error;
      }
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

const globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  const keys = new Set();

  for (let i = 0; i < list.length; i++) {
    const key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error(`Cannot have duplicate keys in a keyed each`);
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);

  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += ' ' + classes_to_add;
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
    }
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        title: '',
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  const index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.29.0'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

  $capture_state() {}

  $inject_state() {}

}

exports.SvelteComponentDev = SvelteComponentDev;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error(`Infinite loop detected`);
    }
  };
}
},{}],"node_modules/svelte/store/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derived = derived;
exports.readable = readable;
exports.writable = writable;
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function () {
    return _internal.get_store_value;
  }
});

var _internal = require("../internal");

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */

function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value, start = _internal.noop) {
  let stop;
  const subscribers = [];

  function set(new_value) {
    if ((0, _internal.safe_not_equal)(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;

        for (let i = 0; i < subscribers.length; i += 1) {
          const s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run, invalidate = _internal.noop) {
    const subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || _internal.noop;
    }

    run(value);
    return () => {
      const index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set,
    update,
    subscribe
  };
}

function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, set => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = _internal.noop;

    const sync = () => {
      if (pending) {
        return;
      }

      cleanup();
      const result = fn(single ? values[0] : values, set);

      if (auto) {
        set(result);
      } else {
        cleanup = (0, _internal.is_function)(result) ? result : _internal.noop;
      }
    };

    const unsubscribers = stores_array.map((store, i) => (0, _internal.subscribe)(store, value => {
      values[i] = value;
      pending &= ~(1 << i);

      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      (0, _internal.run_all)(unsubscribers);
      cleanup();
    };
  });
}
},{"../internal":"node_modules/svelte/internal/index.mjs"}],"src/store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showCookieBanner = exports.page = void 0;

var store_1 = require("svelte/store");

exports.page = store_1.writable("home");
exports.showCookieBanner = store_1.writable(true);
},{"svelte/store":"node_modules/svelte/store/index.mjs"}],"src/pages/Home.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _store = require("../store");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var file = "src/pages/Home.svelte";

function create_fragment(ctx) {
  var section;
  var div3;
  var div2;
  var h1;
  var t1;
  var p;
  var t2;
  var div0;
  var a0;
  var t4;
  var span0;
  var t5;
  var a1;
  var t7;
  var div1;
  var ul;
  var li0;
  var a2;
  var span1;
  var t8;
  var li1;
  var a3;
  var span2;
  var section_class_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      section = (0, _internal.element)("section");
      div3 = (0, _internal.element)("div");
      div2 = (0, _internal.element)("div");
      h1 = (0, _internal.element)("h1");
      h1.textContent = "Hi, I'm Ivan";
      t1 = (0, _internal.space)();
      p = (0, _internal.element)("p");
      t2 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      a0 = (0, _internal.element)("a");
      a0.textContent = "About me";
      t4 = (0, _internal.space)();
      span0 = (0, _internal.element)("span");
      t5 = (0, _internal.space)();
      a1 = (0, _internal.element)("a");
      a1.textContent = "My side projects";
      t7 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      ul = (0, _internal.element)("ul");
      li0 = (0, _internal.element)("li");
      a2 = (0, _internal.element)("a");
      span1 = (0, _internal.element)("span");
      t8 = (0, _internal.space)();
      li1 = (0, _internal.element)("li");
      a3 = (0, _internal.element)("a");
      span2 = (0, _internal.element)("span");
      (0, _internal.add_location)(h1, file, 17, 6, 597);
      (0, _internal.add_location)(p, file, 18, 6, 625);
      (0, _internal.attr_dev)(a0, "id", "js-about-link");
      (0, _internal.add_location)(a0, file, 22, 8, 702);
      (0, _internal.attr_dev)(span0, "class", "dot hide-xs hide-sm");
      (0, _internal.add_location)(span0, file, 23, 8, 766);
      (0, _internal.attr_dev)(a1, "id", "js-projects-link");
      (0, _internal.add_location)(a1, file, 24, 8, 811);
      (0, _internal.attr_dev)(div0, "class", "links");
      (0, _internal.add_location)(div0, file, 21, 6, 674);
      (0, _internal.attr_dev)(span1, "class", "icon-github");
      (0, _internal.add_location)(span1, file, 34, 14, 1113);
      (0, _internal.attr_dev)(a2, "target", "_blank");
      (0, _internal.attr_dev)(a2, "class", "icon");
      (0, _internal.attr_dev)(a2, "rel", "noopener");
      (0, _internal.attr_dev)(a2, "href", "https://github.com/ivanlori");
      (0, _internal.add_location)(a2, file, 29, 12, 960);
      (0, _internal.add_location)(li0, file, 28, 10, 943);
      (0, _internal.attr_dev)(span2, "class", "icon-linkedin");
      (0, _internal.add_location)(span2, file, 43, 14, 1364);
      (0, _internal.attr_dev)(a3, "target", "_blank");
      (0, _internal.attr_dev)(a3, "class", "icon");
      (0, _internal.attr_dev)(a3, "rel", "noopener");
      (0, _internal.attr_dev)(a3, "href", "https://www.linkedin.com/in/ivanlori");
      (0, _internal.add_location)(a3, file, 38, 12, 1202);
      (0, _internal.add_location)(li1, file, 37, 10, 1185);
      (0, _internal.add_location)(ul, file, 27, 8, 928);
      (0, _internal.attr_dev)(div1, "class", "social");
      (0, _internal.add_location)(div1, file, 26, 6, 899);
      (0, _internal.attr_dev)(div2, "class", "column col-8 p-centered");
      (0, _internal.add_location)(div2, file, 16, 4, 553);
      (0, _internal.attr_dev)(div3, "class", "columns");
      (0, _internal.add_location)(div3, file, 15, 2, 527);
      (0, _internal.attr_dev)(section, "class", section_class_value = "fadeIn container");
      (0, _internal.add_location)(section, file, 14, 0, 488);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, section, anchor);
      (0, _internal.append_dev)(section, div3);
      (0, _internal.append_dev)(div3, div2);
      (0, _internal.append_dev)(div2, h1);
      (0, _internal.append_dev)(div2, t1);
      (0, _internal.append_dev)(div2, p);
      p.innerHTML =
      /*description*/
      ctx[0];
      (0, _internal.append_dev)(div2, t2);
      (0, _internal.append_dev)(div2, div0);
      (0, _internal.append_dev)(div0, a0);
      (0, _internal.append_dev)(div0, t4);
      (0, _internal.append_dev)(div0, span0);
      (0, _internal.append_dev)(div0, t5);
      (0, _internal.append_dev)(div0, a1);
      (0, _internal.append_dev)(div2, t7);
      (0, _internal.append_dev)(div2, div1);
      (0, _internal.append_dev)(div1, ul);
      (0, _internal.append_dev)(ul, li0);
      (0, _internal.append_dev)(li0, a2);
      (0, _internal.append_dev)(a2, span1);
      (0, _internal.append_dev)(ul, t8);
      (0, _internal.append_dev)(ul, li1);
      (0, _internal.append_dev)(li1, a3);
      (0, _internal.append_dev)(a3, span2);

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(a0, "click",
        /*goToAbout*/
        ctx[1], false, false, false), (0, _internal.listen_dev)(a1, "click",
        /*goToProject*/
        ctx[2], false, false, false)];
        mounted = true;
      }
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(section);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)("Home", slots, []);
  var description = "I write <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong> to translate ideas in reality.<br>\n      Someone says I'm a <strong>Frontend Developer</strong>.<br>\n      Currently living in Milan.";

  function goToAbout() {
    _store.showCookieBanner.set(false);

    _store.page.set("about");
  }

  function goToProject() {
    _store.showCookieBanner.set(false);

    _store.page.set("projects");
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Home> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      page: _store.page,
      showCookieBanner: _store.showCookieBanner,
      description: description,
      goToAbout: goToAbout,
      goToProject: goToProject
    };
  };

  return [description, goToAbout, goToProject];
}

var Home = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Home, _SvelteComponentDev);

  var _super = _createSuper(Home);

  function Home(options) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, options);
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Home",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Home;
}(_internal.SvelteComponentDev);

var _default = Home;
exports.default = _default;
},{"svelte/internal":"node_modules/svelte/internal/index.mjs","../store":"src/store.ts"}],"src/components/SingleProjectLayout.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var file = "src/components/SingleProjectLayout.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
} // (12:4) {#each technologies as technology}


function create_each_block(ctx) {
  var li;
  var t_value =
  /*technology*/
  ctx[7] + "";
  var t;
  var block = {
    c: function create() {
      li = (0, _internal.element)("li");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(li, "class", "fadeInRight");
      (0, _internal.add_location)(li, file, 12, 6, 282);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, li, anchor);
      (0, _internal.append_dev)(li, t);
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(li);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(12:4) {#each technologies as technology}",
    ctx: ctx
  });
  return block;
} // (18:4) {#if demoUrl}


function create_if_block(ctx) {
  var div;
  var t0;
  var a;
  var t1;
  var block = {
    c: function create() {
      div = (0, _internal.element)("div");
      t0 = (0, _internal.space)();
      a = (0, _internal.element)("a");
      t1 = (0, _internal.text)("Demo");
      (0, _internal.attr_dev)(div, "class", "dot hide-xs hide-sm");
      (0, _internal.add_location)(div, file, 18, 6, 451);
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.attr_dev)(a, "rel", "noopener");
      (0, _internal.attr_dev)(a, "href",
      /*demoUrl*/
      ctx[3]);
      (0, _internal.add_location)(a, file, 19, 6, 493);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.insert_dev)(target, t0, anchor);
      (0, _internal.insert_dev)(target, a, anchor);
      (0, _internal.append_dev)(a, t1);
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (detaching) (0, _internal.detach_dev)(t0);
      if (detaching) (0, _internal.detach_dev)(a);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(18:4) {#if demoUrl}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div1;
  var h3;
  var t1;
  var p;
  var t2;
  var ul;
  var t3;
  var div0;
  var a;
  var t4;
  var t5;
  var div1_class_value;
  var each_value =
  /*technologies*/
  ctx[4];
  (0, _internal.validate_each_argument)(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var if_block =
  /*demoUrl*/
  ctx[3] && create_if_block(ctx);
  var block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      h3 = (0, _internal.element)("h3");
      h3.textContent = "".concat(
      /*name*/
      ctx[1]);
      t1 = (0, _internal.space)();
      p = (0, _internal.element)("p");
      t2 = (0, _internal.space)();
      ul = (0, _internal.element)("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      a = (0, _internal.element)("a");
      t4 = (0, _internal.text)("Source code");
      t5 = (0, _internal.space)();
      if (if_block) if_block.c();
      (0, _internal.add_location)(h3, file, 6, 2, 177);
      (0, _internal.add_location)(p, file, 7, 2, 195);
      (0, _internal.add_location)(ul, file, 10, 2, 232);
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.attr_dev)(a, "rel", "noopener");
      (0, _internal.attr_dev)(a, "href",
      /*sourceCodeUrl*/
      ctx[5]);
      (0, _internal.add_location)(a, file, 16, 4, 356);
      (0, _internal.add_location)(div0, file, 15, 2, 346);
      (0, _internal.attr_dev)(div1, "class", div1_class_value = !
      /*visible*/
      ctx[0] && "d-none");
      (0, _internal.add_location)(div1, file, 5, 0, 140);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, h3);
      (0, _internal.append_dev)(div1, t1);
      (0, _internal.append_dev)(div1, p);
      p.innerHTML =
      /*description*/
      ctx[2];
      (0, _internal.append_dev)(div1, t2);
      (0, _internal.append_dev)(div1, ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(ul, null);
      }

      (0, _internal.append_dev)(div1, t3);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.append_dev)(div0, a);
      (0, _internal.append_dev)(a, t4);
      (0, _internal.append_dev)(div0, t5);
      if (if_block) if_block.m(div0, null);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*technologies*/
      16) {
        each_value =
        /*technologies*/
        ctx[4];
        (0, _internal.validate_each_argument)(each_value);

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(ul, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (
      /*demoUrl*/
      ctx[3]) if_block.p(ctx, dirty);

      if (dirty &
      /*visible*/
      1 && div1_class_value !== (div1_class_value = !
      /*visible*/
      ctx[0] && "d-none")) {
        (0, _internal.attr_dev)(div1, "class", div1_class_value);
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div1);
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (if_block) if_block.d();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)("SingleProjectLayout", slots, []);
  var data = $$props.data;
  var visible = $$props.visible;
  var _data = data,
      name = _data.name,
      description = _data.description,
      demoUrl = _data.demoUrl,
      technologies = _data.technologies,
      sourceCodeUrl = _data.sourceCodeUrl;
  var writable_props = ["data", "visible"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SingleProjectLayout> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("data" in $$props) $$invalidate(6, data = $$props.data);
    if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
  };

  $$self.$capture_state = function () {
    return {
      data: data,
      visible: visible,
      name: name,
      description: description,
      demoUrl: demoUrl,
      technologies: technologies,
      sourceCodeUrl: sourceCodeUrl
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("data" in $$props) $$invalidate(6, data = $$props.data);
    if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [visible, name, description, demoUrl, technologies, sourceCodeUrl, data];
}

var SingleProjectLayout = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SingleProjectLayout, _SvelteComponentDev);

  var _super = _createSuper(SingleProjectLayout);

  function SingleProjectLayout(options) {
    var _this;

    _classCallCheck(this, SingleProjectLayout);

    _this = _super.call(this, options);
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {
      data: 6,
      visible: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SingleProjectLayout",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*data*/
    ctx[6] === undefined && !("data" in props)) {
      console.warn("<SingleProjectLayout> was created without expected prop 'data'");
    }

    if (
    /*visible*/
    ctx[0] === undefined && !("visible" in props)) {
      console.warn("<SingleProjectLayout> was created without expected prop 'visible'");
    }

    return _this;
  }

  _createClass(SingleProjectLayout, [{
    key: "data",
    get: function get() {
      throw new Error("<SingleProjectLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SingleProjectLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "visible",
    get: function get() {
      throw new Error("<SingleProjectLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SingleProjectLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return SingleProjectLayout;
}(_internal.SvelteComponentDev);

var _default = SingleProjectLayout;
exports.default = _default;
},{"svelte/internal":"node_modules/svelte/internal/index.mjs"}],"src/pages/Projects.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _SingleProjectLayout = _interopRequireDefault(require("../components/SingleProjectLayout.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var file = "src/pages/Projects.svelte";

function create_fragment(ctx) {
  var section;
  var div2;
  var div1;
  var h1;
  var t1;
  var p;
  var t2;
  var br;
  var t3;
  var t4;
  var ul;
  var li0;
  var a0;
  var t5;
  var a0_class_value;
  var t6;
  var li1;
  var a1;
  var t7;
  var a1_class_value;
  var t8;
  var li2;
  var a2;
  var t9;
  var a2_class_value;
  var t10;
  var div0;
  var singleprojectlayout0;
  var t11;
  var singleprojectlayout1;
  var t12;
  var singleprojectlayout2;
  var current;
  var mounted;
  var dispose;
  singleprojectlayout0 = new _SingleProjectLayout.default({
    props: {
      data:
      /*dataCvBuilder*/
      ctx[5],
      visible:
      /*showBuilder*/
      ctx[0]
    },
    $$inline: true
  });
  singleprojectlayout1 = new _SingleProjectLayout.default({
    props: {
      data:
      /*dataVuemmerce*/
      ctx[4],
      visible:
      /*showVuemmerce*/
      ctx[2]
    },
    $$inline: true
  });
  singleprojectlayout2 = new _SingleProjectLayout.default({
    props: {
      data:
      /*dataEstimateOnline*/
      ctx[3],
      visible:
      /*showEstimate*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      section = (0, _internal.element)("section");
      div2 = (0, _internal.element)("div");
      div1 = (0, _internal.element)("div");
      h1 = (0, _internal.element)("h1");
      h1.textContent = "My latest projects";
      t1 = (0, _internal.space)();
      p = (0, _internal.element)("p");
      t2 = (0, _internal.text)("All my projects are experiments hosted on Github.");
      br = (0, _internal.element)("br");
      t3 = (0, _internal.text)("\n        I enjoy making new things and happy to see people who learn from them.");
      t4 = (0, _internal.space)();
      ul = (0, _internal.element)("ul");
      li0 = (0, _internal.element)("li");
      a0 = (0, _internal.element)("a");
      t5 = (0, _internal.text)("CV Builder");
      t6 = (0, _internal.space)();
      li1 = (0, _internal.element)("li");
      a1 = (0, _internal.element)("a");
      t7 = (0, _internal.text)("Vuemmerce");
      t8 = (0, _internal.space)();
      li2 = (0, _internal.element)("li");
      a2 = (0, _internal.element)("a");
      t9 = (0, _internal.text)("Estimate of costs");
      t10 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      (0, _internal.create_component)(singleprojectlayout0.$$.fragment);
      t11 = (0, _internal.space)();
      (0, _internal.create_component)(singleprojectlayout1.$$.fragment);
      t12 = (0, _internal.space)();
      (0, _internal.create_component)(singleprojectlayout2.$$.fragment);
      (0, _internal.add_location)(h1, file, 61, 6, 1923);
      (0, _internal.add_location)(br, file, 63, 57, 2018);
      (0, _internal.add_location)(p, file, 62, 6, 1957);
      (0, _internal.attr_dev)(a0, "class", a0_class_value =
      /*showBuilder*/
      ctx[0] && "active");
      (0, _internal.attr_dev)(a0, "id", "builder");
      (0, _internal.add_location)(a0, file, 68, 10, 2188);
      (0, _internal.attr_dev)(li0, "class", "tab-item");
      (0, _internal.add_location)(li0, file, 67, 8, 2156);
      (0, _internal.attr_dev)(a1, "class", a1_class_value =
      /*showVuemmerce*/
      ctx[2] && "active");
      (0, _internal.attr_dev)(a1, "id", "vuemmerce");
      (0, _internal.add_location)(a1, file, 74, 10, 2363);
      (0, _internal.attr_dev)(li1, "class", "tab-item");
      (0, _internal.add_location)(li1, file, 73, 8, 2331);
      (0, _internal.attr_dev)(a2, "id", "estimate");
      (0, _internal.attr_dev)(a2, "class", a2_class_value =
      /*showEstimate*/
      ctx[1] && "active");
      (0, _internal.add_location)(a2, file, 80, 10, 2541);
      (0, _internal.attr_dev)(li2, "class", "tab-item");
      (0, _internal.add_location)(li2, file, 79, 8, 2509);
      (0, _internal.attr_dev)(ul, "class", "tab tab-block");
      (0, _internal.add_location)(ul, file, 66, 6, 2121);
      (0, _internal.attr_dev)(div0, "class", "mt-2");
      (0, _internal.add_location)(div0, file, 86, 6, 2703);
      (0, _internal.attr_dev)(div1, "class", "column col-8 p-centered");
      (0, _internal.add_location)(div1, file, 60, 4, 1879);
      (0, _internal.attr_dev)(div2, "class", "columns");
      (0, _internal.add_location)(div2, file, 59, 2, 1853);
      (0, _internal.attr_dev)(section, "class", "fadeIn container");
      (0, _internal.add_location)(section, file, 58, 0, 1816);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, section, anchor);
      (0, _internal.append_dev)(section, div2);
      (0, _internal.append_dev)(div2, div1);
      (0, _internal.append_dev)(div1, h1);
      (0, _internal.append_dev)(div1, t1);
      (0, _internal.append_dev)(div1, p);
      (0, _internal.append_dev)(p, t2);
      (0, _internal.append_dev)(p, br);
      (0, _internal.append_dev)(p, t3);
      (0, _internal.append_dev)(div1, t4);
      (0, _internal.append_dev)(div1, ul);
      (0, _internal.append_dev)(ul, li0);
      (0, _internal.append_dev)(li0, a0);
      (0, _internal.append_dev)(a0, t5);
      (0, _internal.append_dev)(ul, t6);
      (0, _internal.append_dev)(ul, li1);
      (0, _internal.append_dev)(li1, a1);
      (0, _internal.append_dev)(a1, t7);
      (0, _internal.append_dev)(ul, t8);
      (0, _internal.append_dev)(ul, li2);
      (0, _internal.append_dev)(li2, a2);
      (0, _internal.append_dev)(a2, t9);
      (0, _internal.append_dev)(div1, t10);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.mount_component)(singleprojectlayout0, div0, null);
      (0, _internal.append_dev)(div0, t11);
      (0, _internal.mount_component)(singleprojectlayout1, div0, null);
      (0, _internal.append_dev)(div0, t12);
      (0, _internal.mount_component)(singleprojectlayout2, div0, null);
      current = true;

      if (!mounted) {
        dispose = [(0, _internal.listen_dev)(a0, "click",
        /*onTabClick*/
        ctx[6], false, false, false), (0, _internal.listen_dev)(a1, "click",
        /*onTabClick*/
        ctx[6], false, false, false), (0, _internal.listen_dev)(a2, "click",
        /*onTabClick*/
        ctx[6], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*showBuilder*/
      1 && a0_class_value !== (a0_class_value =
      /*showBuilder*/
      ctx[0] && "active")) {
        (0, _internal.attr_dev)(a0, "class", a0_class_value);
      }

      if (!current || dirty &
      /*showVuemmerce*/
      4 && a1_class_value !== (a1_class_value =
      /*showVuemmerce*/
      ctx[2] && "active")) {
        (0, _internal.attr_dev)(a1, "class", a1_class_value);
      }

      if (!current || dirty &
      /*showEstimate*/
      2 && a2_class_value !== (a2_class_value =
      /*showEstimate*/
      ctx[1] && "active")) {
        (0, _internal.attr_dev)(a2, "class", a2_class_value);
      }

      var singleprojectlayout0_changes = {};
      if (dirty &
      /*showBuilder*/
      1) singleprojectlayout0_changes.visible =
      /*showBuilder*/
      ctx[0];
      singleprojectlayout0.$set(singleprojectlayout0_changes);
      var singleprojectlayout1_changes = {};
      if (dirty &
      /*showVuemmerce*/
      4) singleprojectlayout1_changes.visible =
      /*showVuemmerce*/
      ctx[2];
      singleprojectlayout1.$set(singleprojectlayout1_changes);
      var singleprojectlayout2_changes = {};
      if (dirty &
      /*showEstimate*/
      2) singleprojectlayout2_changes.visible =
      /*showEstimate*/
      ctx[1];
      singleprojectlayout2.$set(singleprojectlayout2_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(singleprojectlayout0.$$.fragment, local);
      (0, _internal.transition_in)(singleprojectlayout1.$$.fragment, local);
      (0, _internal.transition_in)(singleprojectlayout2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(singleprojectlayout0.$$.fragment, local);
      (0, _internal.transition_out)(singleprojectlayout1.$$.fragment, local);
      (0, _internal.transition_out)(singleprojectlayout2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(section);
      (0, _internal.destroy_component)(singleprojectlayout0);
      (0, _internal.destroy_component)(singleprojectlayout1);
      (0, _internal.destroy_component)(singleprojectlayout2);
      mounted = false;
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var profileUrl = "https://github.com/ivanlori";

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)("Projects", slots, []);
  var showBuilder = true;
  var showEstimate = false;
  var showVuemmerce = false;
  var dataEstimateOnline = {
    name: "Estimate of costs",
    description: "A simply interactive estimate of costs with preview and print options made with:",
    sourceCodeUrl: "".concat(profileUrl, "/EstimateOnline"),
    demoUrl: "https://ivanlori.github.io/EstimateOnline/",
    technologies: ["Vanilla JS", "ES6"]
  };
  var dataVuemmerce = {
    name: "Vuemmerce | E-commerce template",
    description: "A pure frontend starter ecommerce template made with:",
    sourceCodeUrl: "".concat(profileUrl, "/Vuemmerce"),
    demoUrl: "https://vuemmerce-git-master.ivanlori.now.sh/",
    technologies: ["Vue.js", "ES6", "Nuxt.js", "Vuex", "Bulma framework"]
  };
  var dataCvBuilder = {
    name: "CV-Builder",
    description: "A resume builder with export in PDF format written with the following technologies:",
    sourceCodeUrl: "".concat(profileUrl, "/CV-builder"),
    demoUrl: "",
    technologies: ["React.js", "Redux.js", "Redux Saga", "Typescript", "Styled components", "Puppeteer", "Node.js/Express.js", "Webpack.js", "Jest", "ES6"]
  };

  function onTabClick(e) {
    e.preventDefault();
    var target = e.target.id;

    if (target === "vuemmerce") {
      $$invalidate(0, showBuilder = false);
      $$invalidate(1, showEstimate = false);
      $$invalidate(2, showVuemmerce = true);
    } else if (target === "builder") {
      $$invalidate(0, showBuilder = true);
      $$invalidate(1, showEstimate = false);
      $$invalidate(2, showVuemmerce = false);
    } else if (target === "estimate") {
      $$invalidate(0, showBuilder = false);
      $$invalidate(1, showEstimate = true);
      $$invalidate(2, showVuemmerce = false);
    }
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Projects> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      SingleProjectLayout: _SingleProjectLayout.default,
      profileUrl: profileUrl,
      showBuilder: showBuilder,
      showEstimate: showEstimate,
      showVuemmerce: showVuemmerce,
      dataEstimateOnline: dataEstimateOnline,
      dataVuemmerce: dataVuemmerce,
      dataCvBuilder: dataCvBuilder,
      onTabClick: onTabClick
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("showBuilder" in $$props) $$invalidate(0, showBuilder = $$props.showBuilder);
    if ("showEstimate" in $$props) $$invalidate(1, showEstimate = $$props.showEstimate);
    if ("showVuemmerce" in $$props) $$invalidate(2, showVuemmerce = $$props.showVuemmerce);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [showBuilder, showEstimate, showVuemmerce, dataEstimateOnline, dataVuemmerce, dataCvBuilder, onTabClick];
}

var Projects = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Projects, _SvelteComponentDev);

  var _super = _createSuper(Projects);

  function Projects(options) {
    var _this;

    _classCallCheck(this, Projects);

    _this = _super.call(this, options);
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Projects",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Projects;
}(_internal.SvelteComponentDev);

var _default = Projects;
exports.default = _default;
},{"svelte/internal":"node_modules/svelte/internal/index.mjs","../components/SingleProjectLayout.svelte":"src/components/SingleProjectLayout.svelte"}],"src/pages/AboutMe.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var file = "src/pages/AboutMe.svelte";

function create_fragment(ctx) {
  var section;
  var div2;
  var div1;
  var h1;
  var t1;
  var p;
  var t2;
  var div0;
  var a;
  var block = {
    c: function create() {
      section = (0, _internal.element)("section");
      div2 = (0, _internal.element)("div");
      div1 = (0, _internal.element)("div");
      h1 = (0, _internal.element)("h1");
      h1.textContent = "".concat(title);
      t1 = (0, _internal.space)();
      p = (0, _internal.element)("p");
      t2 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      a = (0, _internal.element)("a");
      a.textContent = "Contact me";
      (0, _internal.add_location)(h1, file, 12, 6, 544);
      (0, _internal.add_location)(p, file, 13, 6, 567);
      (0, _internal.attr_dev)(a, "href", "mailto:ivan.lori@protonmail.com");
      (0, _internal.add_location)(a, file, 17, 8, 644);
      (0, _internal.attr_dev)(div0, "class", "links");
      (0, _internal.add_location)(div0, file, 16, 6, 616);
      (0, _internal.attr_dev)(div1, "class", "column col-8 p-centered");
      (0, _internal.add_location)(div1, file, 11, 4, 500);
      (0, _internal.attr_dev)(div2, "class", "columns");
      (0, _internal.add_location)(div2, file, 10, 2, 474);
      (0, _internal.attr_dev)(section, "class", "fadeIn container");
      (0, _internal.add_location)(section, file, 9, 0, 437);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, section, anchor);
      (0, _internal.append_dev)(section, div2);
      (0, _internal.append_dev)(div2, div1);
      (0, _internal.append_dev)(div1, h1);
      (0, _internal.append_dev)(div1, t1);
      (0, _internal.append_dev)(div1, p);
      p.innerHTML =
      /*description*/
      ctx[0];
      (0, _internal.append_dev)(div1, t2);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.append_dev)(div0, a);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(section);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var title = "About me...";

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)("AboutMe", slots, []);
  var description = "My interests are about minimalism, self growth, finance, astronomy and technology.<br />\n      Always searching for a book that could improve my vision drastically.<br />\n      I love hearing about different points of views and experiences on topics and...<br />\n      of course videogames!<br /><br />\n      Do you want to hear more? Let's get in touch!\n";
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<AboutMe> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      title: title,
      description: description
    };
  };

  return [description];
}

var AboutMe = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(AboutMe, _SvelteComponentDev);

  var _super = _createSuper(AboutMe);

  function AboutMe(options) {
    var _this;

    _classCallCheck(this, AboutMe);

    _this = _super.call(this, options);
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "AboutMe",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return AboutMe;
}(_internal.SvelteComponentDev);

var _default = AboutMe;
exports.default = _default;
},{"svelte/internal":"node_modules/svelte/internal/index.mjs"}],"src/components/CookieBanner.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _store = require("../store");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var file = "src/components/CookieBanner.svelte";

function create_fragment(ctx) {
  var div;
  var button;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = (0, _internal.element)("div");
      button = (0, _internal.element)("button");
      t = (0, _internal.text)("\n  This website is cookie-free!");
      (0, _internal.attr_dev)(button, "class", "btn btn-clear float-right");
      (0, _internal.add_location)(button, file, 7, 2, 199);
      (0, _internal.attr_dev)(div, "class", "js-cookie-banner toast toast-success float-right");
      (0, _internal.add_location)(div, file, 6, 0, 134);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, button);
      (0, _internal.append_dev)(div, t);

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(button, "click",
        /*closeBanner*/
        ctx[0], false, false, false);
        mounted = true;
      }
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)("CookieBanner", slots, []);

  function closeBanner() {
    _store.showCookieBanner.set(false);
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<CookieBanner> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      showCookieBanner: _store.showCookieBanner,
      closeBanner: closeBanner
    };
  };

  return [closeBanner];
}

var CookieBanner = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(CookieBanner, _SvelteComponentDev);

  var _super = _createSuper(CookieBanner);

  function CookieBanner(options) {
    var _this;

    _classCallCheck(this, CookieBanner);

    _this = _super.call(this, options);
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "CookieBanner",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return CookieBanner;
}(_internal.SvelteComponentDev);

var _default = CookieBanner;
exports.default = _default;
},{"svelte/internal":"node_modules/svelte/internal/index.mjs","../store":"src/store.ts"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../assets/icomoon.eot":[["icomoon.87eb1730.eot","src/assets/icomoon.eot"],"src/assets/icomoon.eot"],"./../assets/icomoon.ttf":[["icomoon.63548151.ttf","src/assets/icomoon.ttf"],"src/assets/icomoon.ttf"],"./../assets/icomoon.woff":[["icomoon.9186cc46.woff","src/assets/icomoon.woff"],"src/assets/icomoon.woff"],"./../assets/icomoon.svg":[["icomoon.1f267d41.svg","src/assets/icomoon.svg"],"src/assets/icomoon.svg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/App.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _Home = _interopRequireDefault(require("./pages/Home.svelte"));

var _Projects = _interopRequireDefault(require("./pages/Projects.svelte"));

var _AboutMe = _interopRequireDefault(require("./pages/AboutMe.svelte"));

var _CookieBanner = _interopRequireDefault(require("./components/CookieBanner.svelte"));

var _store = require("./store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var file = "src/App.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-us8v22-style";
  style.textContent = "@import \"./styles/main.scss\";\n";
  (0, _internal.append_dev)(document.head, style);
} // (17:2) {#if $showCookieBanner}


function create_if_block_4(ctx) {
  var cookiebanner;
  var current;
  cookiebanner = new _CookieBanner.default({
    $$inline: true
  });
  var block = {
    c: function create() {
      (0, _internal.create_component)(cookiebanner.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(cookiebanner, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(cookiebanner.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(cookiebanner.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(cookiebanner, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_4.name,
    type: "if",
    source: "(17:2) {#if $showCookieBanner}",
    ctx: ctx
  });
  return block;
} // (20:2) {#if $page !== 'home'}


function create_if_block_3(ctx) {
  var div;
  var span;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = (0, _internal.element)("div");
      span = (0, _internal.element)("span");
      span.textContent = "✕";
      (0, _internal.add_location)(span, file, 20, 51, 799);
      (0, _internal.attr_dev)(div, "class", "close-wrapper");
      (0, _internal.add_location)(div, file, 20, 4, 752);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, span);

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(div, "click",
        /*goToHome*/
        ctx[2], false, false, false);
        mounted = true;
      }
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(20:2) {#if $page !== 'home'}",
    ctx: ctx
  });
  return block;
} // (29:33) 


function create_if_block_2(ctx) {
  var projects;
  var current;
  projects = new _Projects.default({
    $$inline: true
  });
  var block = {
    c: function create() {
      (0, _internal.create_component)(projects.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(projects, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(projects.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(projects.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(projects, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(29:33) ",
    ctx: ctx
  });
  return block;
} // (27:30) 


function create_if_block_1(ctx) {
  var aboutme;
  var current;
  aboutme = new _AboutMe.default({
    $$inline: true
  });
  var block = {
    c: function create() {
      (0, _internal.create_component)(aboutme.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(aboutme, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(aboutme.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(aboutme.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(aboutme, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(27:30) ",
    ctx: ctx
  });
  return block;
} // (25:2) {#if $page === 'home'}


function create_if_block(ctx) {
  var home;
  var current;
  home = new _Home.default({
    $$inline: true
  });
  var block = {
    c: function create() {
      (0, _internal.create_component)(home.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(home, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(home.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(home.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(home, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(25:2) {#if $page === 'home'}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var header;
  var t0;
  var t1;
  var main;
  var current_block_type_index;
  var if_block2;
  var t2;
  var footer;
  var div1;
  var div0;
  var span0;
  var t4;
  var br;
  var t5;
  var span1;
  var t6;
  var a;
  var current;
  var if_block0 =
  /*$showCookieBanner*/
  ctx[0] && create_if_block_4(ctx);
  var if_block1 =
  /*$page*/
  ctx[1] !== "home" && create_if_block_3(ctx);
  var if_block_creators = [create_if_block, create_if_block_1, create_if_block_2];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*$page*/
    ctx[1] === "home") return 0;
    if (
    /*$page*/
    ctx[1] === "about") return 1;
    if (
    /*$page*/
    ctx[1] === "projects") return 2;
    return -1;
  }

  if (~(current_block_type_index = select_block_type(ctx, -1))) {
    if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }

  var block = {
    c: function create() {
      header = (0, _internal.element)("header");
      if (if_block0) if_block0.c();
      t0 = (0, _internal.space)();
      if (if_block1) if_block1.c();
      t1 = (0, _internal.space)();
      main = (0, _internal.element)("main");
      if (if_block2) if_block2.c();
      t2 = (0, _internal.space)();
      footer = (0, _internal.element)("footer");
      div1 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      span0 = (0, _internal.element)("span");
      span0.textContent = "Made with the open source in mind and ❤️";
      t4 = (0, _internal.space)();
      br = (0, _internal.element)("br");
      t5 = (0, _internal.space)();
      span1 = (0, _internal.element)("span");
      t6 = (0, _internal.text)("Do you want to know how this website is made?\n        ");
      a = (0, _internal.element)("a");
      a.textContent = "View the source code";
      (0, _internal.attr_dev)(header, "class", "text-right");
      (0, _internal.add_location)(header, file, 15, 0, 640);
      (0, _internal.attr_dev)(main, "id", "app");
      (0, _internal.add_location)(main, file, 23, 0, 838);
      (0, _internal.add_location)(span0, file, 35, 6, 1121);
      (0, _internal.add_location)(br, file, 36, 6, 1181);
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.attr_dev)(a, "rel", "noopener");
      (0, _internal.attr_dev)(a, "href", "https://github.com/ivanlori/ivalo.dev/");
      (0, _internal.add_location)(a, file, 39, 8, 1263);
      (0, _internal.add_location)(span1, file, 37, 6, 1194);
      (0, _internal.attr_dev)(div0, "class", "column col-8 text-center p-centered p-2");
      (0, _internal.add_location)(div0, file, 34, 4, 1061);
      (0, _internal.attr_dev)(div1, "class", "columns");
      (0, _internal.add_location)(div1, file, 33, 2, 1035);
      (0, _internal.attr_dev)(footer, "class", "container");
      (0, _internal.add_location)(footer, file, 32, 0, 1006);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, header, anchor);
      if (if_block0) if_block0.m(header, null);
      (0, _internal.append_dev)(header, t0);
      if (if_block1) if_block1.m(header, null);
      (0, _internal.insert_dev)(target, t1, anchor);
      (0, _internal.insert_dev)(target, main, anchor);

      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(main, null);
      }

      (0, _internal.insert_dev)(target, t2, anchor);
      (0, _internal.insert_dev)(target, footer, anchor);
      (0, _internal.append_dev)(footer, div1);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.append_dev)(div0, span0);
      (0, _internal.append_dev)(div0, t4);
      (0, _internal.append_dev)(div0, br);
      (0, _internal.append_dev)(div0, t5);
      (0, _internal.append_dev)(div0, span1);
      (0, _internal.append_dev)(span1, t6);
      (0, _internal.append_dev)(span1, a);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*$showCookieBanner*/
      ctx[0]) {
        if (if_block0) {
          if (dirty &
          /*$showCookieBanner*/
          1) {
            (0, _internal.transition_in)(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx);
          if_block0.c();
          (0, _internal.transition_in)(if_block0, 1);
          if_block0.m(header, t0);
        }
      } else if (if_block0) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        (0, _internal.check_outros)();
      }

      if (
      /*$page*/
      ctx[1] !== "home") {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_3(ctx);
          if_block1.c();
          if_block1.m(header, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index !== previous_block_index) {
        if (if_block2) {
          (0, _internal.group_outros)();
          (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          (0, _internal.check_outros)();
        }

        if (~current_block_type_index) {
          if_block2 = if_blocks[current_block_type_index];

          if (!if_block2) {
            if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block2.c();
          }

          (0, _internal.transition_in)(if_block2, 1);
          if_block2.m(main, null);
        } else {
          if_block2 = null;
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block0);
      (0, _internal.transition_in)(if_block2);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block0);
      (0, _internal.transition_out)(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(header);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (detaching) (0, _internal.detach_dev)(t1);
      if (detaching) (0, _internal.detach_dev)(main);

      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }

      if (detaching) (0, _internal.detach_dev)(t2);
      if (detaching) (0, _internal.detach_dev)(footer);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var $showCookieBanner;
  var $page;
  (0, _internal.validate_store)(_store.showCookieBanner, "showCookieBanner");
  (0, _internal.component_subscribe)($$self, _store.showCookieBanner, function ($$value) {
    return $$invalidate(0, $showCookieBanner = $$value);
  });
  (0, _internal.validate_store)(_store.page, "page");
  (0, _internal.component_subscribe)($$self, _store.page, function ($$value) {
    return $$invalidate(1, $page = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)("App", slots, []);

  function goToHome() {
    _store.page.set("home");
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<App> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Home: _Home.default,
      Projects: _Projects.default,
      AboutMe: _AboutMe.default,
      CookieBanner: _CookieBanner.default,
      page: _store.page,
      showCookieBanner: _store.showCookieBanner,
      goToHome: goToHome,
      $showCookieBanner: $showCookieBanner,
      $page: $page
    };
  };

  return [$showCookieBanner, $page, goToHome];
}

var App = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(App, _SvelteComponentDev);

  var _super = _createSuper(App);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, options);
    if (!document.getElementById("svelte-us8v22-style")) add_css();
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "App",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return App;
}(_internal.SvelteComponentDev);

var _default = App;
exports.default = _default;
},{"svelte/internal":"node_modules/svelte/internal/index.mjs","./pages/Home.svelte":"src/pages/Home.svelte","./pages/Projects.svelte":"src/pages/Projects.svelte","./pages/AboutMe.svelte":"src/pages/AboutMe.svelte","./components/CookieBanner.svelte":"src/components/CookieBanner.svelte","./store":"src/store.ts","./styles/main.scss":"src/styles/main.scss","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var App_svelte_1 = __importDefault(require("./src/App.svelte"));

var app = new App_svelte_1.default({
  target: document.body
});
exports.default = app;
},{"./src/App.svelte":"src/App.svelte"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59457" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/ivalo.dev.77de5100.js.map