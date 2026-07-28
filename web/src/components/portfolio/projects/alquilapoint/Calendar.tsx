"use client";

import { useState } from "react";
import {
    Building2,
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    FileText,
    Filter,
    LayoutGrid,
    MessageSquare,
    Plus,
    Users,
} from "lucide-react";
import { BrowserWindowChrome } from "../shared/BrowserWindowChrome";

type ReservationKey = "a1" | "a2";

interface CalendarCell {
    day: number;
    muted?: boolean;
    today?: boolean;
    reservation?: ReservationKey;
    lastDay?: boolean;
}

const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const CELLS: CalendarCell[] = [
    { day: 29, muted: true },
    { day: 30, muted: true },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12 },
    { day: 13 },
    { day: 14, reservation: "a1" },
    { day: 15, reservation: "a1" },
    { day: 16, reservation: "a1", lastDay: true },
    { day: 17 },
    { day: 18 },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22, reservation: "a2" },
    { day: 23, reservation: "a2" },
    { day: 24, reservation: "a2" },
    { day: 25, reservation: "a2" },
    { day: 26, reservation: "a2", today: true },
    { day: 27, reservation: "a2" },
    { day: 28, reservation: "a2" },
    { day: 29, reservation: "a2" },
    { day: 30, reservation: "a2" },
    { day: 31, reservation: "a2", lastDay: true },
    { day: 1, muted: true },
    { day: 2, muted: true },
];

const RESERVATIONS: Record<
    ReservationKey,
    {
        tenant: string;
        dates: string;
        dotColor: string;
        contract: string;
        status: string;
        nights: string;
        amount: string;
    }
> = {
    a1: {
        tenant: "Martina Duarte",
        dates: "Jul 14 – 16",
        dotColor: "#2563eb",
        contract: "CT-0231",
        status: "Finalizado",
        nights: "2",
        amount: "$180.000",
    },
    a2: {
        tenant: "Grupo Verona SRL",
        dates: "Jul 22 – 31",
        dotColor: "#15803d",
        contract: "CT-0239",
        status: "Activo",
        nights: "9",
        amount: "$1.150.000",
    },
};

const RING = "0 0 0 2px rgba(13,43,69,.55)";

const SIDEBAR_ICONS = [
    { icon: LayoutGrid, active: false },
    { icon: Building2, active: false },
    { icon: FileText, active: false },
    { icon: CalendarIcon, active: true },
    { icon: Users, active: false },
    { icon: MessageSquare, active: false },
];

export function Calendar() {
    const [selected, setSelected] = useState<ReservationKey>("a2");

    return (
        <BrowserWindowChrome url="app.alquilapoint.com/occupancy">
            <div className="flex min-h-0 flex-1 bg-[#f6f7f9]">
                <div className="flex w-[54px] shrink-0 flex-col items-center gap-1.5 border-r border-[#e4e8ed] bg-white py-3">
                    <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0d2b45] text-[11px] font-bold text-white">
                        A
                    </span>
                    {SIDEBAR_ICONS.map(({ icon: Icon, active }, i) => (
                        <span
                            key={i}
                            className={`flex h-[30px] w-[30px] items-center justify-center rounded-lg ${
                                active ? "bg-[#eef2f7] text-[#0f2b46]" : "text-[#9aa7b5]"
                            }`}
                        >
                            <Icon className="h-[15px] w-[15px]" strokeWidth={1.8} />
                        </span>
                    ))}
                    <span className="flex-1" />
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1c1c1c] text-[11px] font-semibold text-white">
                        N
                    </span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3.5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[17px] font-bold tracking-tight text-[#0f2b46]">
                                Occupancy
                            </span>
                            <span className="text-[11.5px] text-[#64748b]">
                                Vista mensual de unidades alquiladas por día.
                            </span>
                        </div>
                        <span className="inline-flex h-[30px] items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#0d2b45] px-3 text-[11.5px] font-semibold text-white">
                            <Plus className="h-3 w-3" strokeWidth={2.4} />
                            Nuevo alquiler
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e4e8ed] bg-white text-[#0f2b46]">
                                <ChevronLeft className="h-[13px] w-[13px]" strokeWidth={2.2} />
                            </span>
                            <span className="px-1 text-sm font-bold text-[#0f2b46]">
                                July 2026
                            </span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e4e8ed] bg-white text-[#0f2b46]">
                                <ChevronRight className="h-[13px] w-[13px]" strokeWidth={2.2} />
                            </span>
                            <span className="inline-flex h-7 items-center rounded-lg border border-[#e4e8ed] bg-white px-3 text-[11.5px] font-semibold text-[#0f2b46]">
                                Hoy
                            </span>
                        </div>
                        <span className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-[#e4e8ed] bg-white px-3 text-[11.5px] font-semibold text-[#0f2b46]">
                            <Filter className="h-3 w-3" strokeWidth={2.2} />
                            Filtros
                        </span>
                    </div>

                    <div className="overflow-hidden rounded-[10px] border border-[#e4e8ed] bg-white">
                        <div className="grid grid-cols-7">
                            {WEEKDAYS.map((wd) => (
                                <div
                                    key={wd}
                                    className="border-r border-b border-[#e4e8ed] bg-[#f2f4f7] px-2 py-1 text-right text-[9.5px] font-semibold tracking-widest text-[#64748b] last:border-r-0"
                                >
                                    {wd}
                                </div>
                            ))}
                            {CELLS.map((cell, i) => {
                                const res = cell.reservation
                                    ? RESERVATIONS[cell.reservation]
                                    : null;
                                const isSelected = cell.reservation === selected;

                                return (
                                    <div
                                        key={i}
                                        className={`relative h-[52px] border-r border-b border-[#e4e8ed] last:border-r-0 ${
                                            cell.muted ? "bg-[#ececef]" : "bg-white"
                                        }`}
                                    >
                                        {cell.today ? (
                                            <span className="absolute top-[3px] right-[5px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#0d2b45] text-[10.5px] font-semibold text-white">
                                                {cell.day}
                                            </span>
                                        ) : (
                                            <span
                                                className={`absolute top-[5px] right-[7px] text-[10.5px] ${
                                                    cell.muted ? "text-[#aab4c0]" : "text-[#64748b]"
                                                }`}
                                            >
                                                {cell.day}
                                            </span>
                                        )}

                                        {res && cell.reservation && (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelected(cell.reservation as ReservationKey)
                                                }
                                                className={`absolute top-5 right-1 left-1 flex h-[17px] cursor-pointer items-center gap-1 rounded bg-white px-1 text-left transition-opacity ${
                                                    isSelected ? "opacity-100" : "opacity-45"
                                                }`}
                                                style={{
                                                    borderTop: "1px solid #cfd8e3",
                                                    borderBottom: "1px solid #cfd8e3",
                                                    borderRight: cell.lastDay
                                                        ? `3px solid ${res.dotColor}`
                                                        : "1px solid #cfd8e3",
                                                    borderLeft: "3px solid #14405f",
                                                    boxShadow: isSelected ? RING : "none",
                                                }}
                                            >
                                                <span className="font-mono text-[8.5px] text-[#5b6b7c]">
                                                    A
                                                </span>
                                                <span className="flex-1 truncate text-[9.5px] text-[#0f2b46]">
                                                    La Ocho
                                                </span>
                                                <span
                                                    className="h-[7px] w-[7px] shrink-0 rounded-full"
                                                    style={{ background: res.dotColor }}
                                                />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-[9.5px] font-semibold tracking-widest text-[#64748b]">
                                REFERENCIAS
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[10.5px] text-[#64748b]">
                                <span className="block h-[11px] w-[3px] bg-[#14405f]" />
                                Barra izquierda = departamento
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[10.5px] text-[#64748b]">
                                <span className="block h-[7px] w-[7px] rounded-full bg-[#e2603b]" />
                                Punto = contrato / inquilino
                            </span>
                        </div>
                        <span className="text-[10.5px] whitespace-nowrap text-[#64748b]">
                            1 departamento · 2 alquileres
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 rounded-[10px] border border-[#e4e8ed] bg-white p-2.5">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#e8eef5] text-[11px] font-bold text-[#14405f]">
                                A
                            </span>
                            <div className="flex flex-col">
                                <span className="text-xs leading-tight font-bold text-[#0f2b46]">
                                    Departamento A
                                </span>
                                <span className="text-[10.5px] text-[#64748b]">
                                    La Ocho · Rivadavia 1240
                                </span>
                            </div>
                        </div>

                        {(Object.keys(RESERVATIONS) as ReservationKey[]).map((key) => {
                            const res = RESERVATIONS[key];
                            return (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={() => setSelected(key)}
                                    className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 text-left"
                                    style={{
                                        background: selected === key ? "#eef3f8" : "transparent",
                                    }}
                                >
                                    <span className="inline-flex items-center gap-2 text-[11.5px] text-[#0f2b46]">
                                        <span
                                            className="block h-2 w-2 rounded-full"
                                            style={{ background: res.dotColor }}
                                        />
                                        {res.tenant}
                                    </span>
                                    <span className="font-mono text-[10.5px] text-[#64748b]">
                                        {res.dates}
                                    </span>
                                </button>
                            );
                        })}

                        <div className="grid grid-cols-4 gap-2.5 border-t border-[#e4e8ed] pt-2.5">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    CONTRATO
                                </span>
                                <span className="font-mono text-[11.5px] font-semibold text-[#0f2b46]">
                                    {RESERVATIONS[selected].contract}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    ESTADO
                                </span>
                                <span className="text-[11.5px] font-semibold text-[#0f2b46]">
                                    {RESERVATIONS[selected].status}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    NOCHES
                                </span>
                                <span className="font-mono text-[11.5px] font-semibold text-[#0f2b46]">
                                    {RESERVATIONS[selected].nights}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    PAGOS
                                </span>
                                <span className="font-mono text-[11.5px] font-semibold text-[#0f2b46]">
                                    {RESERVATIONS[selected].amount}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserWindowChrome>
    );
}
