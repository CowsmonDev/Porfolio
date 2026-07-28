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

type Status = "Activo" | "Finalizado" | "Intención";

interface Reservation {
    id: string;
    unit: string;
    tenant: string;
    /** Nombre corto para la barra del calendario, donde no entra el completo. */
    short: string;
    from: number;
    to: number;
    status: Status;
    contract: string;
    amount: string;
}

/** Julio 2026 arranca miercoles y tiene 31 dias. */
const LEADING_DAYS = [29, 30];
const TRAILING_DAYS = [1, 2];
const DAYS_IN_MONTH = 31;
const TODAY = 26;

const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// La barra izquierda de cada reserva identifica la unidad.
const UNIT_COLORS: Record<string, string> = {
    A: "#14405f",
    B: "#0f766e",
    C: "#7c3aed",
    D: "#b45309",
    E: "#be123c",
};

// El punto identifica en que estado esta el contrato.
const STATUS_COLORS: Record<Status, string> = {
    Activo: "#15803d",
    Finalizado: "#2563eb",
    Intención: "#b45309",
};

/**
 * Agrupadas por unidad y ordenadas por fecha: una unidad no puede estar
 * alquilada dos veces a la vez, asi que cada reserva tiene que empezar despues
 * de que termine la anterior de su misma unidad.
 */
const RESERVATIONS: Reservation[] = [
    // Unidad A
    {
        id: "ct-0231",
        unit: "A",
        tenant: "Martina Duarte",
        short: "Duarte",
        from: 14,
        to: 16,
        status: "Finalizado",
        contract: "CT-0231",
        amount: "$180.000",
    },
    {
        id: "ct-0239",
        unit: "A",
        tenant: "Grupo Verona SRL",
        short: "Verona",
        from: 22,
        to: 31,
        status: "Activo",
        contract: "CT-0239",
        amount: "$1.150.000",
    },
    // Unidad B
    {
        id: "ct-0234",
        unit: "B",
        tenant: "Lucas Ferreyra",
        short: "Ferreyra",
        from: 1,
        to: 9,
        status: "Finalizado",
        contract: "CT-0234",
        amount: "$760.000",
    },
    {
        id: "ct-0241",
        unit: "B",
        tenant: "Familia Pizarro",
        short: "Pizarro",
        from: 18,
        to: 26,
        status: "Activo",
        contract: "CT-0241",
        amount: "$840.000",
    },
    // Unidad C
    {
        id: "ct-0221",
        unit: "C",
        tenant: "Tomás Roldán",
        short: "Roldán",
        from: 6,
        to: 12,
        status: "Finalizado",
        contract: "CT-0221",
        amount: "$690.000",
    },
    {
        id: "ct-0244",
        unit: "C",
        tenant: "Sofía Bianchi",
        short: "Bianchi",
        from: 27,
        to: 31,
        status: "Intención",
        contract: "CT-0244",
        amount: "$380.000",
    },
    // Unidad D
    {
        id: "ct-0242",
        unit: "D",
        tenant: "Delegación UNICEN",
        short: "UNICEN",
        from: 20,
        to: 28,
        status: "Activo",
        contract: "CT-0242",
        amount: "$900.000",
    },
    // Unidad E
    {
        id: "ct-0226",
        unit: "E",
        tenant: "Hernán Vidal",
        short: "Vidal",
        from: 9,
        to: 17,
        status: "Finalizado",
        contract: "CT-0226",
        amount: "$780.000",
    },
];

const UNITS = [...new Set(RESERVATIONS.map((r) => r.unit))];

const RING = "0 0 0 2px rgba(13,43,69,.55)";

const SIDEBAR_ICONS = [
    { icon: LayoutGrid, active: false },
    { icon: Building2, active: false },
    { icon: FileText, active: false },
    { icon: CalendarIcon, active: true },
    { icon: Users, active: false },
    { icon: MessageSquare, active: false },
];

const MONTH_CELLS = [
    ...LEADING_DAYS.map((day) => ({ day, muted: true })),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => ({
        day: i + 1,
        muted: false,
    })),
    ...TRAILING_DAYS.map((day) => ({ day, muted: true })),
];

function nightsOf(reservation: Reservation) {
    return reservation.to - reservation.from;
}

function formatDates(reservation: Reservation) {
    return `Jul ${reservation.from} – ${reservation.to}`;
}

export function Calendar() {
    const [selectedId, setSelectedId] = useState("ct-0239");
    const selected =
        RESERVATIONS.find((r) => r.id === selectedId) ?? RESERVATIONS[0];

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
                                active
                                    ? "bg-[#eef2f7] text-[#0f2b46]"
                                    : "text-[#9aa7b5]"
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
                                <ChevronLeft
                                    className="h-[13px] w-[13px]"
                                    strokeWidth={2.2}
                                />
                            </span>
                            <span className="px-1 text-sm font-bold text-[#0f2b46]">
                                July 2026
                            </span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e4e8ed] bg-white text-[#0f2b46]">
                                <ChevronRight
                                    className="h-[13px] w-[13px]"
                                    strokeWidth={2.2}
                                />
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
                            {MONTH_CELLS.map((cell, i) => {
                                const stays = cell.muted
                                    ? []
                                    : RESERVATIONS.filter(
                                          (r) =>
                                              cell.day >= r.from &&
                                              cell.day <= r.to,
                                      );
                                const isToday = !cell.muted && cell.day === TODAY;

                                return (
                                    <div
                                        key={i}
                                        className={`relative h-[58px] border-r border-b border-[#e4e8ed] last:border-r-0 ${
                                            cell.muted ? "bg-[#ececef]" : "bg-white"
                                        }`}
                                    >
                                        {isToday ? (
                                            <span className="absolute top-[3px] right-[5px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#0d2b45] text-[10.5px] font-semibold text-white">
                                                {cell.day}
                                            </span>
                                        ) : (
                                            <span
                                                className={`absolute top-[5px] right-[7px] text-[10.5px] ${
                                                    cell.muted
                                                        ? "text-[#aab4c0]"
                                                        : "text-[#64748b]"
                                                }`}
                                            >
                                                {cell.day}
                                            </span>
                                        )}

                                        {stays.map((res, idx) => {
                                            const isSelected =
                                                res.id === selectedId;
                                            const isLastDay = cell.day === res.to;

                                            return (
                                                <button
                                                    key={res.id}
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedId(res.id)
                                                    }
                                                    title={`${res.tenant} · Unidad ${res.unit}`}
                                                    className={`absolute right-1 left-1 flex h-[11px] cursor-pointer items-center gap-1 rounded-[3px] bg-white px-1 text-left transition-opacity ${
                                                        isSelected
                                                            ? "opacity-100"
                                                            : "opacity-45"
                                                    }`}
                                                    style={{
                                                        top: 19 + idx * 12,
                                                        borderTop:
                                                            "1px solid #cfd8e3",
                                                        borderBottom:
                                                            "1px solid #cfd8e3",
                                                        borderRight: isLastDay
                                                            ? `3px solid ${STATUS_COLORS[res.status]}`
                                                            : "1px solid #cfd8e3",
                                                        borderLeft: `3px solid ${UNIT_COLORS[res.unit]}`,
                                                        boxShadow: isSelected
                                                            ? RING
                                                            : "none",
                                                    }}
                                                >
                                                    <span className="font-mono text-[8px] font-bold text-[#5b6b7c]">
                                                        {res.unit}
                                                    </span>
                                                    <span className="flex-1 truncate text-[8.5px] text-[#0f2b46]">
                                                        {res.short}
                                                    </span>
                                                    <span
                                                        className="h-[6px] w-[6px] shrink-0 rounded-full"
                                                        style={{
                                                            background:
                                                                STATUS_COLORS[
                                                                    res.status
                                                                ],
                                                        }}
                                                    />
                                                </button>
                                            );
                                        })}
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
                                Barra izquierda = unidad
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[10.5px] text-[#64748b]">
                                <span className="block h-[7px] w-[7px] rounded-full bg-[#15803d]" />
                                Punto = estado del contrato
                            </span>
                        </div>
                        <span className="text-[10.5px] whitespace-nowrap text-[#64748b]">
                            {UNITS.length} unidades · {RESERVATIONS.length}{" "}
                            alquileres
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 rounded-[10px] border border-[#e4e8ed] bg-white p-2.5">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-[#e8eef5] text-[#14405f]">
                                <Building2
                                    className="h-[13px] w-[13px]"
                                    strokeWidth={2}
                                />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-xs leading-tight font-bold text-[#0f2b46]">
                                    La Ocho
                                </span>
                                <span className="text-[10.5px] text-[#64748b]">
                                    Rivadavia 1240 · 5 unidades
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-x-3 gap-y-2">
                            {UNITS.map((unit) => (
                                <div key={unit} className="flex flex-col gap-0.5">
                                    <span className="flex items-center gap-1.5 px-2 text-[9.5px] font-semibold tracking-widest text-[#64748b]">
                                        <span
                                            className="block h-[9px] w-[3px] shrink-0 rounded-sm"
                                            style={{
                                                background: UNIT_COLORS[unit],
                                            }}
                                        />
                                        UNIDAD {unit}
                                    </span>

                                    {RESERVATIONS.filter(
                                        (r) => r.unit === unit,
                                    ).map((res) => (
                                        <button
                                            key={res.id}
                                            type="button"
                                            onClick={() => setSelectedId(res.id)}
                                            className="flex items-center justify-between gap-2 rounded-md px-2 py-1 text-left"
                                            style={{
                                                background:
                                                    selectedId === res.id
                                                        ? "#eef3f8"
                                                        : "transparent",
                                            }}
                                        >
                                            <span className="inline-flex min-w-0 items-center gap-1.5 text-[11px] text-[#0f2b46]">
                                                <span
                                                    className="block h-2 w-2 shrink-0 rounded-full"
                                                    style={{
                                                        background:
                                                            STATUS_COLORS[
                                                                res.status
                                                            ],
                                                    }}
                                                />
                                                <span className="truncate">
                                                    {res.tenant}
                                                </span>
                                            </span>
                                            <span className="font-mono text-[10px] whitespace-nowrap text-[#64748b]">
                                                {formatDates(res)}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-5 gap-2.5 border-t border-[#e4e8ed] pt-2.5">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    CONTRATO
                                </span>
                                <span className="font-mono text-[11.5px] font-semibold text-[#0f2b46]">
                                    {selected.contract}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    UNIDAD
                                </span>
                                <span className="font-mono text-[11.5px] font-semibold text-[#0f2b46]">
                                    {selected.unit}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    ESTADO
                                </span>
                                <span className="text-[11.5px] font-semibold text-[#0f2b46]">
                                    {selected.status}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    NOCHES
                                </span>
                                <span className="font-mono text-[11.5px] font-semibold text-[#0f2b46]">
                                    {nightsOf(selected)}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9.5px] tracking-widest text-[#64748b]">
                                    PAGOS
                                </span>
                                <span className="font-mono text-[11.5px] font-semibold text-[#0f2b46]">
                                    {selected.amount}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserWindowChrome>
    );
}
