import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { changeLocation } from '../features/status/statusSlice';
import { useDispatch, useSelector } from 'react-redux';

const navigation = [
  { name: 'Acting', href: '/acting', current: false, category: 'acting', location: 'acting' },
  { name: 'Filmmaking', href: '/films', current: false, category: 'films', location: 'films' },
  { name: 'Comedy', href: '/comedy', current: false, location: 'comedy' },
  { name: 'About Me', href: '/about', current: false, location: 'about' },
  { name: 'Contact', href: '/contact', current: false, location: 'contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarTW(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useSelector((state) => state.status.location);

    const [current, setCurrent] = useState('');

  return (
    <Disclosure as="nav" className="z-50 bg-gray-900">
      {({ open }) => (
        <>
          <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink className="cursor-pointer list-none font-semibold text-2xl font-serif text-indigo-100"

                            link={''}
                  >Kev Nguyen</NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="list-none flex space-x-4">
                    {navigation.map((item) => (
                        <NavLink className={classNames(
                            item.current ? 'cursor-pointer bg-gray-900 text-white' : 'cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white',
                            'cursor-pointer rounded-md px-3 py-2 text-sm font-medium'
                          )}

                          key={item.name}
                          location={item.location}
                          aria-current={item.location === current ? 'page' : undefined}

                          link={item.href}
                          category={item.category}>{item.name}</NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.location === current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export function NavLink (props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (props.setCurrentRoute === undefined){
      return (
        <li className={props.className}>
            <Link onClick={() => { dispatch(changeLocation(props.location))}} to={props.link} state={props.category}>{props.children}</Link>
        </li>
    )
    }

    return (
        <li className={props.className}>
            <Link onClick={() => { dispatch(changeLocation(props.location))}} to={props.link} state={props.category}>{props.children}</Link>
        </li>
    )
}