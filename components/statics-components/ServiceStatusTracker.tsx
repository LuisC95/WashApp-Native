import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Wash, ServiceStatusEnum } from './Service';

interface ServiceStatusTrackerProps {
    service: Wash;
}

/**
 * Componente que muestra el estado actual de un servicio
 * Reemplaza el botón "New Wash" mostrando el progreso del servicio
 */
export default function ServiceStatusTracker({ service }: ServiceStatusTrackerProps) {
    /**
     * Obtiene el color correspondiente al estado del servicio
     */
    const getStatusColor = (status: ServiceStatusEnum): string => {
        switch (status) {
            case ServiceStatusEnum.TUNNEL_WASH:
                return '#3498db';      // Azul
            case ServiceStatusEnum.QUEUED:
                return '#f39c12';      // Naranja
            case ServiceStatusEnum.IN_PROGRESS:
                return '#e74c3c';      // Rojo
            case ServiceStatusEnum.COMPLETED:
                return '#52CC52';      // Verde
            default:
                return '#95a5a6';      // Gris
        }
    };

    /**
     * Obtiene el icono emoji correspondiente al estado
     */
    const getStatusEmoji = (status: ServiceStatusEnum): string => {
        switch (status) {
            case ServiceStatusEnum.TUNNEL_WASH:
                return '💧';           // Agua/lavado
            case ServiceStatusEnum.QUEUED:
                return '⏳';           // Reloj de arena
            case ServiceStatusEnum.IN_PROGRESS:
                return '🔧';           // Herramienta
            case ServiceStatusEnum.COMPLETED:
                return '✅';           // Checkmark
            default:
                return '❓';
        }
    };

    const statusColor = getStatusColor(service.serviceStatus.currentStatus);
    const statusLabel = service.serviceStatus.getStatusLabel();
    const statusEmoji = getStatusEmoji(service.serviceStatus.currentStatus);

    return (
        <View style={[styles.container, { borderColor: statusColor }]}>
            {/* Encabezado con número de servicio */}
            <View style={styles.header}>
                <Text style={styles.serviceNumber}>
                    Servicio #{service.serviceNumber}
                </Text>
                <Text style={styles.serviceType}>
                    {service.serviceType}
                </Text>
            </View>

            {/* Estado actual con color y emoji */}
            <View style={[styles.statusBox, { backgroundColor: statusColor }]}>
                <Text style={styles.statusEmoji}>{statusEmoji}</Text>
                <Text style={styles.statusLabel}>{statusLabel}</Text>
            </View>

            {/* Información adicional del servicio */}
            <View style={styles.details}>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Empleado:</Text>
                    <Text style={styles.detailValue}>{service.serviceEmployee}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Tiempo:</Text>
                    <Text style={styles.detailValue}>{service.serviceTimming} min</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Calificación:</Text>
                    <Text style={styles.detailValue}>
                        {'⭐'.repeat(service.serviceRating)}
                    </Text>
                </View>
            </View>

            {/* Recomendaciones */}
            <View style={styles.recommendations}>
                <Text style={styles.recommendationsLabel}>Recomendaciones:</Text>
                <Text style={styles.recommendationsText}>
                    {service.recomendations}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#f8f9fa',
    },

    header: {
        marginBottom: 12,
    },

    serviceNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000E1F',
        marginBottom: 4,
    },

    serviceType: {
        fontSize: 14,
        color: '#555',
        fontStyle: 'italic',
    },

    statusBox: {
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },

    statusEmoji: {
        fontSize: 28,
    },

    statusLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },

    details: {
        marginBottom: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
    },

    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },

    detailLabel: {
        fontSize: 13,
        fontWeight: '500',
        color: '#666',
    },

    detailValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#000E1F',
    },

    recommendations: {
        backgroundColor: '#e8f4f8',
        borderRadius: 8,
        padding: 10,
    },

    recommendationsLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#0066cc',
        marginBottom: 4,
    },

    recommendationsText: {
        fontSize: 12,
        color: '#333',
        lineHeight: 18,
    },
});
