import React from 'react'

export function Λ(props: { f: () => JSX.Element | null }) {
  return props.f()
}

export function λ(f: () => JSX.Element | null, props?: any): JSX.Element
export function λ(key: string | number, f: () => JSX.Element | null, props?: any): JSX.Element
export function λ(...args: any) {
  let f: any
  let props: any = {}
  if (typeof args[0] === 'string' || typeof args[0] === 'number') {
    props.key = args.shift()
  }
  if (typeof args[0] !== 'function') {
    throw new Error('You must pass a function!')
  }
  f = args.shift()
  if (args[0] && typeof args[0] === 'object') {
    Object.assign(props, args.shift())
  }
  return <Λ {...props || {}} f={f} />
}

export default λ
