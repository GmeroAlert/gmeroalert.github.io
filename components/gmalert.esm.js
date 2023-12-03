function animationendHandle($el, handle) {
  const animationend = e => {
    handle(e.animationName);
  };
  $el.addEventListener('animationend', animationend);
}
function changeAnimation($el, animationName) {
  $el.style.animationName = animationName;
}

function cn(className) {
  return `gmal-${className}`;
}
function newDiv(...className) {
  const $div = document.createElement('div');
  $div.classList.add(...className);
  return $div;
}
function setMsgCount($el, count) {
  const countClassName = cn('count');
  let $count = $el.querySelector(`.${countClassName}`);
  if (!$count) {
    $count = document.createElement('span');
    $count.classList.add(countClassName);
    $el.append($count);
  }
  $count.innerHTML = `${count > 99 ? '99' : count}`;
  changeAnimation($count, '');
  setTimeout(() => {
    changeAnimation($count, cn('shake'));
  });
}
const getContainer = () => {
  let $root = document.querySelector(`.gmal-box`);
  if (!$root) {
    $root = newDiv(cn('box'));
    document.body.append($root);
  }
  return $root;
};
const getMessageContainer = () => {
  let $root = document.querySelector(`.${cn('msg-box')}`);
  if ($root) return $root;
  $root = newDiv(cn('msg-box'));
  getContainer().append($root);
  return $root;
};
const getNoticeContainer = () => {
  let $wrapper = document.querySelector(`.${cn('notice-box')}`);
  if ($wrapper) return $wrapper;
  $wrapper = newDiv(cn('notice-box'));
  getContainer().append($wrapper);
  return $wrapper;
};

// 用于修改样式的工具类，并且可以减少回流重绘，后面代码中会频繁用到
function changeStyle(el, arr) {
  const original = el.style.cssText.split(';');
  original.pop();
  el.style.cssText = `${original.concat(arr).join(';')};`;
}

const viewBox = `viewBox="0 0 24 24"`;
const styles = `style="width:1em;height:1em;vertical-align:baseline"`;
const svgLoading = `<svg class="${cn('ani-turn')}" ${viewBox} ${styles}><path d="M1,12A11,11,0,0,0,12,23h0A11,11,0,0,0,12,1" style="fill:none;stroke:#1890ff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M18.5,12A6.5,6.5,0,1,0,12,18.5h0" style="fill:none;stroke:#1890ff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`;

// info, warning, error, success, loading
const Icons = [`<svg ${viewBox} ${styles}><circle cx="12" cy="12" r="12" style="fill:#29abe2"/><path d="M12,17.5a1,1,0,0,1-1-1v-5h-.5a1,1,0,0,1,0-2H12a1,1,0,0,1,1,1v6A1,1,0,0,1,12,17.5Z" style="fill:#fff"/><path d="M14,18.5H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" style="fill:#fff"/><circle cx="12" cy="6" r="1.5" style="fill:#fff"/></svg>`, `<svg ${viewBox} ${styles}><circle cx="12" cy="12" r="12" style="fill:#faad14"/><path d="M12,19.5A1.5,1.5,0,1,0,10.5,18,1.5,1.5,0,0,0,12,19.5Z" style="fill:#fff;fill-rule:evenodd"/><path d="M12,14a1.5,1.5,0,0,1-1.5-1.5v-7a1.5,1.5,0,0,1,3,0v7A1.5,1.5,0,0,1,12,14Z" style="fill:#fff"/></svg>`, `<svg ${viewBox} ${styles}><circle cx="12" cy="12" r="12" style="fill:#e06968"/><path d="M16,8,8,16" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M8,8l8,8" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`, `<svg ${viewBox} ${styles}><path d="M12,.5l3.18,2.2h3.93l1.21,3.55,3.18,2.2L22.28,12l1.22,3.55-3.18,2.2L19.11,21.3H15.18L12,23.5,8.82,21.3H4.89L3.68,17.75.5,15.55,1.72,12,.5,8.45l3.18-2.2L4.89,2.7H8.82Z" style="fill:#52c41a;stroke:#52c41a;stroke-linecap:round;stroke-linejoin:round"/><path d="M7.5,12l3,3,6-6" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`, svgLoading];
const types = ['info', 'warning', 'error', 'success', 'loading'];
function SvgIcon(type, className = '') {
  const index = types.indexOf(type);
  const svg = Icons[index] ?? '';
  return `<i class="${className}">${svg}</i>`;
}

function baseCn(dense, className, extClassName) {
  return `class="${cn('aniicon')} ${cn(className)} ${dense ? cn('dense') : ''} ${extClassName}"`;
}
function SuccessIcon(dense = false, className = '') {
  return `<div ${baseCn(dense, 'success-icon', className)}><div class="${cn('success-line')} ${cn('line-tip')}"></div><div class="${cn('success-line')} ${cn('line-long')}"></div><div class="${cn('success-ring')}"></div><div class="${cn('success-fix')}"></div></div>`;
}
function ErrorIcon(dense = false, className = '') {
  return `<div ${baseCn(dense, 'err-icon', className)}><div class="${cn('err-r')}"><div class="${cn('err-ll')}"></div><div class="${cn('err-lr')}"></div></div></div>`;
}
function WarnIcon(dense = false, className = '') {
  return `<div ${baseCn(dense, 'warn-icon', className)}><div class="${cn('warn-content')}">!</div></div>`;
}
function InfoIcon(dense = false, className = '') {
  return `<div ${baseCn(dense, 'info-icon', className)}><div class="${cn('info-content')}">i</div></div>`;
}
function LoadingIcon(dense = false, className = '') {
  return `<div ${baseCn(dense, 'load-icon', className)}>${svgLoading}</div>`;
}
function AnimatedIcon(type, dense = false, className = '') {
  switch (type) {
    case 'success':
      return SuccessIcon(dense, className);
    case 'error':
      return ErrorIcon(dense, className);
    case 'warning':
      return WarnIcon(dense, className);
    case 'info':
      return InfoIcon(dense, className);
    case 'loading':
      return LoadingIcon(dense, className);
    default:
      return '';
  }
}

/**
 * 消息容器
 */
class Msg {
  timeout = 2500;
  maxCount = 8;
  activeInsts = new Map();

  // 0: 'due to maxCount' | 1:'msg only one'

  constructor(core, type) {
    this.type = type;
    this.core = core;
    if (type === 1) {
      this.timeout = 0;
    }
  }
  config(config) {
    this.timeout = config.timeout || this.timeout;
    this.maxCount = config.maxCount || this.maxCount;
  }
  fire(conf) {
    const oMsg = this.mkMsg(conf);
    if (conf.type !== 'loading') {
      this.sT(oMsg, conf?.timeout || this.timeout);
    }
    return oMsg;
  }

  // 设置定时
  sT(oMsg, timeout) {
    if (!timeout) return;
    const {
      $el
    } = oMsg;
    let p = oMsg.progress;
    p ??= this.mkP(oMsg, timeout);
    p.reset();
    $el.onmouseenter = p.pause;
    $el.onmouseleave = p.resume;
  }

  // 设置进度
  mkP(oMsg, timeout) {
    const {
      $el
    } = oMsg;
    const $progress = newDiv(cn('progress'));
    const $progressBar = newDiv(cn('progress-bar'));
    $progress.append($progressBar);
    $el.append($progress);
    $progressBar.ontransitionend = () => {
      oMsg.close(-1);
    };
    const get = () => {
      return $progressBar.clientWidth / $progress.clientWidth;
    };
    const pause = () => {
      changeStyle($progressBar, ['transition:none', `width:${get() * 100}%`]);
    };
    const resume = () => {
      changeStyle($progressBar, ['width:0', `transition:width ${timeout * get()}ms linear`]);
    };
    const reset = () => {
      changeStyle($progressBar, ['width:100%', 'transition:none']);
      resume();
    };
    return oMsg.progress = {
      pause,
      resume,
      reset
    };
  }

  // 判断消息是否存在, 设置msgCount以及关闭多余消息
  mkMsg(conf) {
    const id = `${conf.content}${conf.type}`;
    if (!this.type && this.activeInsts.has(id)) {
      const inst = this.activeInsts.get(id);
      inst.count += 1;
      setMsgCount(inst.$el, inst.count);
      return inst;
    }
    const props = {
      ...conf,
      onClosed: status => {
        conf?.onClosed && conf.onClosed(status);
      },
      onClose: () => {
        this.activeInsts.delete(id);
      }
    };
    const inst = this.core(props);
    if (this.type === 1 || this.activeInsts.size >= this.maxCount) {
      const nextInst = this.activeInsts.values().next().value;
      if (nextInst) {
        nextInst.progress?.pause();
        nextInst.close(-2);
      }
    }
    const oMsg = {
      ...inst,
      id,
      count: 1
    };
    this.activeInsts.set(id, oMsg);
    inst.open();
    return oMsg;
  }
}
function getArgs(args) {
  const result = {
    content: 'success',
    type: 'success'
  };
  let firstStr = false;
  const assignArg = arg => {
    switch (typeof arg) {
      case 'string':
        if (firstStr) {
          result.type = arg;
        } else {
          result.content = arg;
          firstStr = true;
        }
        break;
      case 'object':
        Object.assign(result, arg);
        break;
    }
  };
  for (let index = 0; index < 3; index++) {
    const element = args[index];
    element && assignArg(element);
  }
  return result;
}
function MakeMsg(core, type) {
  const $msg = new Msg(core, type);
  const res = (...args) => {
    return $msg.fire(getArgs(args));
  };
  res.config = $msg.config.bind($msg);
  return res;
}

function CloseIcon(className = '') {
  const styles = `style="cursor:pointer;transition:all 0.2s"`;
  return `<i class="${className}" ${styles}><svg viewBox="0 0 24 24" width="1em" height="1em"><path d="M1.5,1.5l21,21" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/><path d="M1.5,22.5l21-21" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/></svg></i>`;
}

function Button(text, onClick) {
  const $btn = document.createElement('button');
  $btn.textContent = text;
  $btn.onclick = onClick;
  $btn.classList.add(cn('alert-btn'));
  return $btn;
}
function GmAlert(props) {
  const $wrapper = newDiv(cn('alert'));
  const icon = AnimatedIcon(props.type, false, cn('alert-icon'));
  $wrapper.innerHTML = `${icon}<div class="${cn('alert-title')}">${props.content}</div>`;
  if (props.text || props.html) {
    const $text = newDiv(cn('alert-content'));
    if (props.html) {
      if (typeof props.html === 'string') {
        $text.innerHTML = props.html;
      } else {
        $text.append(props.html);
      }
    } else {
      $text.textContent = props.text || 'hello';
    }
    $wrapper.append($text);
  }
  const $root = getContainer();
  const open = () => {
    $root.append($wrapper);
  };
  const close = status => {
    props.onClose();
    changeAnimation($wrapper, cn('alert-hide'));
    return new Promise(resolve => {
      animationendHandle($wrapper, e => {
        if (e === cn('alert-hide')) {
          $wrapper.remove();
          props.onClosed(status);
          resolve();
        }
      });
    });
  };
  if (props.showCancel || props.showConfirm) {
    const $buttons = newDiv(cn('alert-btn-group'));
    props.showCancel && $buttons.append(Button('取消', () => {
      close(0);
    }));
    props.showConfirm && $buttons.append(Button('确定', () => {
      close(1);
    }));
    $wrapper.append($buttons);
  }
  if (!props.hideClose) {
    const $close = newDiv();
    $close.innerHTML = CloseIcon(cn('alert-close'));
    $close.onclick = () => {
      close(0);
    };
    $wrapper.append($close);
  }
  return {
    close,
    open,
    $el: $wrapper
  };
}
const alert = /*#__PURE__*/MakeMsg(GmAlert, 1);

function GmMessage(props) {
  const icon = SvgIcon(props.type, cn('icon'));
  const $wrapper = newDiv(cn('msg'));
  const $main = newDiv(cn('msg-main'));
  $wrapper.append($main);
  $main.innerHTML = `${icon}<div class=${cn('msg-content')}>${props.content}</div>`;
  const open = () => {
    getMessageContainer().append($wrapper);
    changeAnimation($wrapper, cn('msg-movein'));
  };
  const close = status => {
    props.onClose();
    $main.style.maxHeight = `${$main.offsetHeight}px`;
    changeAnimation($wrapper, cn('msg-moveout'));
    changeAnimation($main, cn('msg-out'));
    return new Promise(resolve => {
      animationendHandle($wrapper, e => {
        if (e === cn('msg-moveout')) {
          $wrapper.remove();
          props.onClosed(status);
          resolve();
        }
      });
    });
  };
  return {
    open,
    close,
    $el: $wrapper
  };
}
const message = /*#__PURE__*/MakeMsg(GmMessage, 0);

function GmNotice(props) {
  const icon = AnimatedIcon(props.type, true, cn('notice-icon'));
  const $wrapper = newDiv(cn('notice'));
  $wrapper.innerHTML = `<div class="${cn('notice-main')}">${icon}\
  <div class="${cn('notice-content')}">${props.content}</div></div>`;
  animationendHandle($wrapper, animationName => {
    if (animationName === cn('open')) {
      changeStyle($wrapper, [`opacity:1`, `animation-name:${cn('notice-movein')}`]);
    }
    if (animationName === cn('notice-moveout')) {
      changeAnimation($wrapper, cn('close'));
    }
  });
  const open = () => {
    getNoticeContainer().prepend($wrapper);
    changeStyle($wrapper, [`max-height:${$wrapper.offsetHeight + 10}px`]);
    changeAnimation($wrapper, cn('open'));
    setTimeout(() => {
      const $icon = $wrapper.querySelector(`.${cn('notice-icon')}`);
      if ($icon) {
        $icon.style.opacity = '1';
      }
    }, 400);
  };
  const close = status => {
    props.onClose();
    return new Promise(resolve => {
      changeAnimation($wrapper, cn('notice-moveout'));
      animationendHandle($wrapper, animationName => {
        if (animationName === cn('close')) {
          $wrapper.remove();
          props.onClosed(status);
          resolve();
        }
      });
    });
  };
  return {
    open,
    close,
    $el: $wrapper
  };
}
const notice = /*#__PURE__*/MakeMsg(GmNotice, 0);

const ColorMap = {
  info: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  error: '#f56c6c'
};
function GmInformation(props) {
  const color = ColorMap[props.type] || ColorMap.info;
  const $wrapper = newDiv(cn('info'));
  $wrapper.innerHTML = `<div class="${cn('info-header')}"><div class="${cn('info-status')}" style="background:${color};"></div><span style="margin-right:auto;font-weight:600">${props.headerLeft || '公告'}</span><span style="font-size:.875em;opacity:.7">${props.headerRight || ''}</span>${props.hideClose ? '' : CloseIcon(cn('info-close'))}</div>` + `<div class="${cn('info-content')}">${props.content}</div>`;
  const open = () => {
    getContainer().append($wrapper);
  };
  const close = status => {
    props.onClose();
    return new Promise(resolve => {
      changeAnimation($wrapper, cn('info-move-out'));
      animationendHandle($wrapper, e => {
        if (e === cn('info-move-out')) {
          $wrapper.remove();
          props.onClosed(status);
          resolve();
        }
      });
    });
  };
  if (!props.hideClose) {
    const $close = $wrapper.querySelector(`.${cn('info-close')}`);
    $close.onclick = () => {
      close(0);
    };
  }
  return {
    open,
    close,
    $el: $wrapper
  };
}
const information = /*#__PURE__*/MakeMsg(GmInformation, 1);

export { alert, information, message, notice };
